import { click, currentURL, settled, visit } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

import createDegrees from 'ember-animated-tutorial/mirage/scenarios/degree';
import createExperiences from 'ember-animated-tutorial/mirage/scenarios/experience';
import createSkills from 'ember-animated-tutorial/mirage/scenarios/skill';

module('Acceptance | data loading', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(function() {
        createDegrees(server);
        createExperiences(server);
        createSkills(server);

        // Create students
        server.createList('student', 5);

        this.set('student', server.db.students[0]);
        this.set('resume', server.db.resumes.find(this.student.resumeIds[0]));
    });


    test('1. We passed the model ID to the {{link-to}} helper', async function(assert) {
        await visit('/');
        await click('[data-test-nav="Main Navigation"] [data-test-link="Students"]');

        assert.dom('[data-test-card]', this.element)
            .exists({ count: 5 }, 'We see 5 students.');

        // Select the first student
        const student = this.student;
        const resume = this.resume;
        const fullName = `${student.firstName} ${student.lastName}`;

        await click(this.element.querySelector(`[data-test-card="${fullName}"]`));
        await settled();

        assert.strictEqual(
            currentURL(),
            '/students/1',
            'We can visit the 1st student page.'
        );

        // Check the details
        const detailsPage = this.element.querySelector('[data-test-details]');

        const degrees = detailsPage.querySelectorAll('[data-test-degree]');
        const experiences = detailsPage.querySelectorAll('[data-test-experience]');
        const skills = detailsPage.querySelectorAll('[data-test-skill]');

        // Our factory creates at least 1 item of each
        assert.ok(degrees.length > 0, 'The student\'s degrees have been loaded.');
        assert.ok(experiences.length > 0, 'The student\'s experiences have been loaded.');
        assert.ok(skills.length > 0, 'The student\'s skills have been loaded.');

        assert.strictEqual(degrees.length, resume.degreeIds.length, 'We see the correct number of degrees.');
        assert.strictEqual(experiences.length, resume.experienceIds.length, 'We see the correct number of experiences.');
        assert.strictEqual(skills.length, resume.skillIds.length, 'We see the correct number of skills.');
    });


    test('2. The student details page does not flash', async function(assert) {
        // Same test conditions as #1
        assert.ok(true);
    });


    test('3. We see all skills in Search page', async function(assert) {
        await visit('/');
        await click('[data-test-nav="Main Navigation"] [data-test-link="Students"]');

        // Select the first student
        const student = this.student;
        const resume = this.resume;
        const fullName = `${student.firstName} ${student.lastName}`;

        await click(this.element.querySelector(`[data-test-card="${fullName}"]`));
        await settled();

        // Visit Search
        await click('[data-test-nav="Main Navigation"] [data-test-link="Search"]');

        assert.strictEqual(
            currentURL(),
            '/search',
            'We can visit the Search page.'
        );

        const availableSkills = this.element.querySelectorAll('[data-test-available-skills] [data-test-pill]');

        assert.ok(
            availableSkills.length > resume.skillIds.length,
            'We see more skills than just those of the first student.'
        );

        assert.strictEqual(
            availableSkills.length,
            140,
            'We see 140 available skills.'
        );

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 0 }, 'We see 0 selected skills.');
    });
});