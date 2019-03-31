import { click, currentURL, settled, visit } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | students', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(function() {
        // Create students
        server.createList('student', 5);

        this.set('student', server.db.students[0]);
        this.set('resume', server.db.resumes.find(this.student.resumeIds[0]));
    });


    test('We can find a student', async function(assert) {
        await visit('/students');

        assert.strictEqual(
            currentURL(),
            '/students',
            'We can visit Students page.'
        );

        assert.dom('[data-test-card]', this.element)
            .exists({ count: 5 }, 'We see 5 students');

        // Select the first student
        const student = this.student;
        const resume = this.resume;
        const fullName = `${student.firstName} ${student.lastName}`;

        // Because faker.js creates URLs to actual images, we use settled()
        // to wait for the profile image to be displayed.
        await click(this.element.querySelector(`[data-test-card="${fullName}"]`));
        await settled();

        assert.strictEqual(
            currentURL(),
            '/students/1',
            'We can visit the 1st student page.'
        );

        // Check the details
        const detailsPage = this.element.querySelector('[data-test-details]');

        assert.dom('[data-test-name]', detailsPage)
            .hasText(fullName, 'We see the correct name.');

        if (student.imageUrl === '') {
            assert.dom('[data-test-icon]', detailsPage.querySelector('[data-test-profile-image]'))
                .exists('We see the correct profile image.');

        } else {
            assert.dom('[data-test-image]', detailsPage.querySelector('[data-test-profile-image]'))
                .exists('We see the correct profile image.');

        }

        assert.dom('[data-test-email]', detailsPage)
            .hasText(student.email, 'We see the correct email.');

        assert.dom('[data-test-phone]', detailsPage)
            .hasText(student.phone, 'We see the correct phone number.');

        assert.dom('[data-test-degree]', detailsPage)
            .exists({ count: resume.degreeIds.length }, 'We see the correct number of degrees.');

        assert.dom('[data-test-experience]', detailsPage)
            .exists({ count: resume.experienceIds.length }, 'We see the correct number of experiences.');

        assert.dom('[data-test-skill]', detailsPage)
            .exists({ count: resume.skillIds.length }, 'We see the correct number of skills.');
    });


    test('We can find another student', async function(assert) {
        await visit('/students');

        // Select the first student
        let student = this.student;
        let fullName = `${student.firstName} ${student.lastName}`;

        await click(this.element.querySelector(`[data-test-card="${fullName}"]`));
        await settled();

        assert.strictEqual(
            currentURL(),
            '/students/1',
            'We can visit the 1st student page.'
        );

        assert.dom('[data-test-name]', this.element.querySelector('[data-test-details]'))
            .hasText(fullName, 'We see the correct name.');

        // Select the second student
        student = server.db.students[1];
        fullName = `${student.firstName} ${student.lastName}`;

        await click(this.element.querySelector(`[data-test-card="${fullName}"]`));
        await settled();

        assert.strictEqual(
            currentURL(),
            '/students/2',
            'We can visit the 2nd student page.'
        );

        assert.dom('[data-test-name]', this.element.querySelector('[data-test-details]'))
            .hasText(fullName, 'We see the correct name.');
    });


    test('We can return to Students page', async function(assert) {
        await visit('/students');

        assert.strictEqual(
            currentURL(),
            '/students',
            'We can visit Students page.'
        );

        assert.dom('[data-test-card]', this.element)
            .exists({ count: 5 }, 'We see 5 students');

        await click('[data-test-link="Home"]');

        assert.strictEqual(
            currentURL(),
            '/',
            'We can visit Home page.'
        );

        assert.dom('[data-test-card]', this.element)
            .doesNotExist('We see 0 students');

        await visit('/students');

        assert.strictEqual(
            currentURL(),
            '/students',
            'We can visit Students page.'
        );

        assert.dom('[data-test-card]', this.element)
            .exists({ count: 5 }, 'We see 5 students');
    });
});