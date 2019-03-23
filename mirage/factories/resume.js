import { Factory } from 'ember-cli-mirage';

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
    experiences() {
        const numExperiences = getRandomNumber([
            {
                value: 1,
                probability: 0.15,
            },
            {
                value: 2,
                probability: 0.30,
            },
            {
                value: 3,
                probability: 0.35,
            },
            {
                value: 4,
                probability: 0.15,
            },
            {
                value: 5,
                probability: 0.05,
            },
        ]);
        const experiences = [];

        let usedIndices = [];

        while (experiences.length < numExperiences) {
            const index = Math.floor(allExperiences.length * Math.random());

            if (!usedIndices.includes(index)) {
                experiences.push(allExperiences[index]);

                usedIndices.push(index);
            }
        }

        return experiences;
    },


    /*************************************************************************************

        Model relationships

    *************************************************************************************/
    afterCreate(resume, server) {
        const availableSkillIds = server.db.skills.mapBy('id');

        const numSkills = getRandomNumber([
            {
                value: 3,
                probability: 0.10,
            },
            {
                value: 4,
                probability: 0.10,
            },
            {
                value: 5,
                probability: 0.15,
            },
            {
                value: 6,
                probability: 0.15,
            },
            {
                value: 7,
                probability: 0.20,
            },
            {
                value: 8,
                probability: 0.20,
            },
            {
                value: 9,
                probability: 0.05,
            },
            {
                value: 10,
                probability: 0.05,
            },
        ]);

        // Assign skills to the resume
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

const allExperiences = [
    'Experience 1',
    'Experience 2',
    'Experience 3',
    'Experience 4',
    'Experience 5',
    'Experience 6',
    'Experience 7',
    'Experience 8',
    'Experience 9',
    'Experience 10',
    'Experience 11',
    'Experience 12',
];