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

        const students = schema.db.students
            .filter(student => {
                let isStudentQualified = false;

                // We assume that each student has only 1 resume
                const resume = schema.db.resumes.find(student.resumeIds[0]);

                // Check the student's skills
                resume.skillIds.forEach(id => {
                    if (desiredSkillIds.includes(id)) {
                        isStudentQualified = true;

                        return;
                    }
                });

                if (isStudentQualified) {
                    return true;
                }

                // Check the student's experiences
                resume.experiences.forEach(({ achievements }) => {
                    let isExperienceRelevant = false;

                    achievements.forEach(achievement => {
                        let isAchievementRelevant = false;

                        const description = achievement.trim().toLowerCase();

                        desiredSkills.forEach(skill => {
                            if (description.includes(skill)) {
                                isAchievementRelevant = true;

                                return;
                            }
                        });

                        if (isAchievementRelevant) {
                            isExperienceRelevant = true;

                            return;
                        }
                    });

                    if (isExperienceRelevant) {
                        isStudentQualified = true;

                        return;
                    }
                });

                return isStudentQualified;
            });

        return students;
    });
}