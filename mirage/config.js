export default function() {
    /*
        Shorthand cheatsheet:

        this.get('/posts');
        this.post('/posts');
        this.get('/posts/:id');
        this.put('/posts/:id'); // or this.patch
        this.del('/posts/:id');

        https://www.ember-cli-mirage.com/docs/advanced/shorthands
    */

    this.get('/students');
    this.get('/students/:id');

    this.get('/skills');

    this.get('/search', (schema, request) => {
        const desiredSkillIds = request.queryParams.skillIds.split(',');

        // Find the skills that the students must meet
        const desiredSkills = schema.db.skills
            .filter(skill => {
                return desiredSkillIds.includes(skill.id);
            })
            .reduce((accumulator, { name, synonyms }) => {
                accumulator.push(name.toLowerCase());

                if (synonyms) {
                    synonyms.forEach(synonym => accumulator.push(synonym.toLowerCase()));
                }

                return accumulator;

            }, []);

        // Find the students that meet the skills
        const payload = schema.db.students.reduce((accumulator, student) => {
            // We assume that each student has only 1 resume
            const resume = schema.db.resumes.find(student.resumeIds[0]);

            // Check the student's experiences
            const relevantExperiences = resume.experiences.reduce((accumulator, experience) => {
                const relevantAchievements = experience.achievements.reduce((accumulator, achievement) => {
                    let isAchievementRelevant = false;

                    const words = achievement.trim().split(/\s+/);
                    const highlightedWords = [];

                    words.forEach(word => {
                        if (desiredSkills.includes(word.toLowerCase())) {
                            isAchievementRelevant = true;

                            highlightedWords.push(`<span class="highlighted">${word}</span>`);

                        } else {
                            highlightedWords.push(word);

                        }
                    });

                    if (isAchievementRelevant) {
                        accumulator.push(highlightedWords.join(' '));
                    }

                    return accumulator;

                }, []);

                // Check if the experience is relevant
                if (relevantAchievements.length > 0) {
                    accumulator.push({
                        position: experience.position,
                        company: experience.company,
                        achievements: relevantAchievements,
                    });
                }

                return accumulator;

            }, []);

            // Check the student's skills
            const relevantSkills = resume.skillIds.reduce((accumulator, id) => {
                if (desiredSkillIds.includes(id)) {
                    accumulator.push(schema.db.skills.find(id));
                }

                return accumulator;

            }, []);

            const isStudentQualified = relevantExperiences.length > 0 || relevantSkills.length > 0;

            if (isStudentQualified) {
                let score = Math.floor(100 * Math.random());
                const numDigits = score.toString().length;

                score = `${'0'.repeat(2 - numDigits)}${score}`;

                accumulator.push({
                    id: student.id,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    fullName: `${student.firstName} ${student.lastName}`,

                    metadata: {
                        score,
                        experiences: relevantExperiences,
                        skills: relevantSkills,
                    },
                });
            }

            return accumulator;

        }, []);

        return payload;
    });
}