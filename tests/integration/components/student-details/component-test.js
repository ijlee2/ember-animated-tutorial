import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | student-details', function(hooks) {
    setupRenderingTest(hooks);

    test('We can create the details', async function(assert) {
        this.set('student', {
            fullName: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '(123) 456-7890',
            internationalPhone: '+1-123-456-7890',
            resumes: [
                {
                    degrees: [
                        'MS, Computer Science',
                        'BS, Mathematics',
                    ],

                    experiences: [
                        {
                            title: 'Lead Frontend Developer',
                            company: 'Ember',
                            achievements: [
                                'Created Ember Octane',
                                'Promoted mentorship and fostering in community',
                            ],
                        },
                    ],

                    skills: [
                        {
                            name: 'Ember',
                            category: 'frontend',
                            synonyms: ['Ember.js'],
                        },
                        {
                            name: 'Glimmer',
                            category: 'frontend',
                            synonyms: ['Glimmer.js'],
                        },
                        {
                            name: 'Leadership',
                            category: 'miscellaneous',
                        },
                        {
                            name: 'Rails',
                            category: 'backend',
                            synonyms: ['Ruby on Rails'],
                        },
                    ],
                },
            ],
        });

        await render(hbs`<StudentDetails @student={{student}} />`);


        // Check personal information
        assert.dom('[data-test-name]', this.element)
            .hasText('Jane Smith', 'We see the correct name.');

        assert.dom('[data-test-email]', this.element)
            .hasText('jane.smith@example.com', 'We see the correct email.');

        assert.dom('[data-test-phone]', this.element)
            .hasText('(123) 456-7890', 'We see the correct phone number.');


        // Check education
        const degrees = this.element.querySelectorAll('[data-test-degree]');

        assert.strictEqual(degrees.length, 2, 'We see 2 degrees.');

        assert.dom(degrees[0])
            .hasText('MS, Computer Science', 'We see the correct 1st degree.');

        assert.dom(degrees[1])
            .hasText('BS, Mathematics', 'We see the correct 2nd degree.');


        // Check experiences
        const experiences = this.element.querySelectorAll('[data-test-experience]');

        assert.strictEqual(experiences.length, 1, 'We see 1 experience.');

        assert.dom('[data-test-title]', experiences[0])
            .hasText('Lead Frontend Developer at Ember', 'We see the correct title for the 1st experience.');

        let achievements = experiences[0].querySelectorAll('[data-test-achievement]');

        assert.strictEqual(achievements.length, 2, 'We see 2 achievements for the 1st experience.');

        assert.dom(achievements[0])
            .hasText('Created Ember Octane', 'We see the correct achievement for the 1st experience.');

        assert.dom(achievements[1])
            .hasText('Promoted mentorship and fostering in community', 'We see the correct achievement for the 2nd experience.');


        // Check skills
        const skills = this.element.querySelectorAll('[data-test-skill]');

        assert.strictEqual(skills.length, 4, 'We see 4 skills.');

        assert.dom(skills[0])
            .hasText('Rails', 'We see the correct 1st skill.');

        assert.dom(skills[1])
            .hasText('Ember', 'We see the correct 2nd skill.');

        assert.dom(skills[2])
            .hasText('Glimmer', 'We see the correct 3rd skill.');

        assert.dom(skills[3])
            .hasText('Leadership', 'We see the correct 4th skill.');
    });
});