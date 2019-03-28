class NonResourcefulController < ApplicationController
    # GET /search (queryParams: sid)
    def search
        desiredSkillIds = params[:sid].split(',');

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

        render json: {
            foo: desiredSkillIds,
            bar: desiredSkills
        }
    end
end