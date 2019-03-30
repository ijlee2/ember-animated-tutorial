class NonResourcefulController < ApplicationController
    # GET /search (queryParams: sid)
    def search
        desiredSkillIds = params[:skillIds].split(',');

        # Find the skills that the students must meet
        desiredSkills = Skill.find(desiredSkillIds)
            .reduce([]) { |accumulator, skill|
                accumulator << skill.name.downcase

                if (!skill.synonyms.empty?)
                    skill.synonyms.each do |synonym|
                        accumulator << synonym.downcase
                    end
                end

                accumulator
            }

        # Find the students that meet the skills
        minScore = 0
        maxScore = 1

        students = Student.all.reduce([]) { |accumulator, student|
            # We assume that each student has only 1 resume
            resume = student.resumes[0]

            # Check the student's experiences
            scoreFromExperiences = 0

            relevantExperiences = resume.experiences.reduce([]) { |accumulator, experience|
                # Check the title
                isTitleRelevant = false

                title = experience.title.split(/\s+/).map() { |word|
                    if (desiredSkills.include?(word.downcase))
                        isTitleRelevant = true

                        scoreFromExperiences += 1

                        "<span class=\"highlighted\">#{word}</span>"

                    else
                        word

                    end

                }.join(' ')

                # Check the achievements
                relevantAchievements = experience.achievements.reduce([]) { |accumulator, achievement|
                    isAchievementRelevant = false

                    words = achievement.strip.split(/\s+/)
                    highlightedWords = []

                    words.each_with_index do |word, index|
                        if (desiredSkills.include?(word.downcase))
                            isAchievementRelevant = true

                            # Consider words in the beginning to be more important. We map
                            # the domain of relative position, [0, 1], to the range of score,
                            # [1, 0] in a smooth manner.
                            relativePosition = index / words.size
                            scoreFromExperiences += 1 + Math.log10(1 - 0.9 * relativePosition)

                            highlightedWords << "<span class=\"highlighted\">#{word}</span>"

                        else
                            highlightedWords << word

                        end
                    end

                    if (isAchievementRelevant)
                        accumulator << highlightedWords.join(' ')
                    end

                    accumulator
                }

                # Check if the experience is relevant
                if (!relevantAchievements.empty?)
                    accumulator << {
                        title: title,
                        company: experience.company,
                        achievements: relevantAchievements
                    }

                elsif (isTitleRelevant)
                    accumulator << {
                        title: title,
                        company: experience.company,
                        achievements: experience.achievements
                    }

                end

                accumulator
            }

            # Check the student's skills
            scoreFromSkills = 0

            relevantSkills = resume.skills.reduce([]) { |accumulator, skill|
                if (desiredSkillIds.include?(skill.id))
                    scoreFromSkills = 0.5

                    accumulator << {
                        name: "<span class=\"highlighted\">#{skill.name}</span>",
                        category: skill.category
                    }
                end

                accumulator
            }

            # Check if the student is qualified
            score = scoreFromExperiences + scoreFromSkills

            if (score > 0)
                maxScore = [score, maxScore].max

                accumulator << {
                    id: student.id,
                    firstName: student.first_name,
                    lastName: student.last_name,
                    fullName: "#{student.first_name} #{student.last_name}",

                    metadata: {
                        score: score,
                        experiences: relevantExperiences,
                        skills: relevantSkills
                    }
                }
            end

            accumulator
        }

        students.each do |student|
            # Create a score between 0 and 99
            relativeScore = (99 * (student[:metadata][:score] - minScore) / (maxScore - minScore)).floor

            relativeScore = '%02d' % relativeScore

            student[:metadata][:relativeScore] = relativeScore
        end

        render json: students
    end
end