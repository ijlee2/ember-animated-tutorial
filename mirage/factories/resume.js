import { Factory } from 'ember-cli-mirage';
import allDegrees from '../scenarios/degree';

// We assume that the probabilities add up to 1
const getRandomNumber = (pdf) => {
    const randomValue = Math.random();
    let sum = 0;

    for (let i = 0; i < pdf.length; i++) {
        const { value, probability } = pdf[i];

        sum += probability;

        if (randomValue < sum) {
            return value;
        }
    }
};

export default Factory.extend({
    degrees() {
        const index = Math.floor(allDegrees.length * Math.random());

        return [
            allDegrees[index],
        ];
    },


    /*************************************************************************************

        Model relationships

    *************************************************************************************/
    afterCreate(resume, server) {
        // Assign experiences
        const availableExperienceIds = server.db.experiences.mapBy('id');

        const numExperiences = getRandomNumber([
            { value: 1, probability: 0.10 },
            { value: 2, probability: 0.20 },
            { value: 3, probability: 0.25 },
            { value: 4, probability: 0.35 },
            { value: 5, probability: 0.10 },
        ]);

        const experienceIds = [];

        while (experienceIds.length < numExperiences) {
            const index = Math.floor(availableExperienceIds.length * Math.random());
            const id = availableExperienceIds[index];

            if (!experienceIds.includes(id)) {
                experienceIds.push(id);
            }
        }

        resume.experienceIds = experienceIds;

        // Assign skills
        const availableSkillIds = server.db.skills.mapBy('id');

        const numSkills = getRandomNumber([
            { value: 3, probability: 0.05 },
            { value: 4, probability: 0.05 },
            { value: 5, probability: 0.10 },
            { value: 6, probability: 0.15 },
            { value: 7, probability: 0.15 },
            { value: 8, probability: 0.20 },
            { value: 9, probability: 0.10 },
            { value: 10, probability: 0.10 },
            { value: 11, probability: 0.05 },
            { value: 12, probability: 0.05 },
        ]);

        const skillIds = [];

        while (skillIds.length < numSkills) {
            const index = Math.floor(availableSkillIds.length * Math.random());
            const id = availableSkillIds[index];

            if (!skillIds.includes(id)) {
                skillIds.push(id);
            }
        }

        resume.skillIds = skillIds;

        // Save skills
        resume.save();
    },
});