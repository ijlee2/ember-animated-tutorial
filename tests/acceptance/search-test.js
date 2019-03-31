import { click, currentURL, fillIn, triggerEvent, visit } from '@ember/test-helpers';
import { setupAnimationTest, time } from 'ember-animated/test-support';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | search', function(hooks) {
    setupApplicationTest(hooks);
    setupAnimationTest(hooks);
    setupMirage(hooks);

    hooks.beforeEach(function() {
        // Create skills
        server.create('skill', {
            id: '1',
            name: 'D3',
            category: 'frontend',
            synonyms: ['D3.js', 'JavaScript'],
        });

        server.create('skill', {
            id: '2',
            name: 'Ember',
            category: 'frontend',
            synonyms: ['Ember.js', 'Ember Octane', 'JavaScript'],
        });

        server.create('skill', {
            id: '3',
            name: 'Management',
            category: 'miscellaneous',
        });

        server.create('skill', {
            id: '4',
            name: 'Nearley',
            category: 'miscellaneous',
            synonyms: ['Nearley.js'],
        });

        server.create('skill', {
            id: '5',
            name: 'QUnit',
            category: 'miscellaneous',
        });

        server.create('skill', {
            id: '6',
            name: 'Rails',
            category: 'backend',
            synonyms: ['Ruby on Rails'],
        });
    });


    test('We can filter and select skills', async function(assert) {
        await visit('/search');

        assert.strictEqual(
            currentURL(),
            '/search',
            'We can visit Search page.'
        );

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 6 }, 'We see 6 available skills.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 0 }, 'We see 0 selected skills.');

        // Search for Ember and Management
        await fillIn('[data-test-input="Search Skills"]', 'em');
        await triggerEvent('[data-test-input="Search Skills"]', 'keyup', { keyCode: 73 });

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 2 }, 'We see 2 available skills.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 0 }, 'We see 0 selected skills.');

        await click('[data-test-available-skills] [data-test-pill="Ember"]');
        await click('[data-test-available-skills] [data-test-pill="Management"]');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 0 }, 'We see 0 available skills.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 2 }, 'We see 2 selected skills.');

        await fillIn('[data-test-input="Search Skills"]', '');
        await triggerEvent('[data-test-input="Search Skills"]', 'keyup', { keyCode: 8 });

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 4 }, 'We see 4 available skills.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 2 }, 'We see 2 selected skills.');

        // Search for QUnit
        await fillIn('[data-test-input="Search Skills"]', 'qunit');
        await triggerEvent('[data-test-input="Search Skills"]', 'keyup', { keyCode: 84 });

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 1 }, 'We see 1 available skill.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 2 }, 'We see 2 selected skills.');

        await click('[data-test-available-skills] [data-test-pill="QUnit"]');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 0 }, 'We see 0 available skills.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 3 }, 'We see 3 selected skills.');

        // Remove Management
        await time.pause();
        await click('[data-test-selected-skills] [data-test-pill="Management"]');
        await time.advance(2000);

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 0 }, 'We see 0 available skills.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 2 }, 'We see 2 selected skills.');
    });


    test('We can search for students who meet the skills', async function(assert) {
        // Create students
        server.create('student', {
            firstName: 'Jane',
            lastName: 'Smith',
        });

        server.create('student', {
            firstName: 'Rodrigo',
            lastName: 'Peña',
        });

        server.create('student', {
            firstName: 'Yannis',
            lastName: 'Philippakis',
        });

        assert.strictEqual(server.db.resumes.length, 3, 'We have 3 resumes.');

        await visit('/search');

        await click('[data-test-available-skills] [data-test-pill="Ember"]');
        await click('[data-test-available-skills] [data-test-pill="QUnit"]');
        await click('[data-test-available-skills] [data-test-pill="Rails"]');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-available-skills]'))
            .exists({ count: 3 }, 'We see 3 available skills.');

        assert.dom('[data-test-pill]', this.element.querySelector('[data-test-selected-skills]'))
            .exists({ count: 3 }, 'We see 3 selected skills.');

        await click('[data-test-button="Submit"]');

        // TODO: Because Mirage creates resumes, degrees, experiences, and skills randomly,
        // it's not easy to test how many students we will see and in what order.
        assert.strictEqual(
            currentURL(),
            '/search/results?sid=2%2C5%2C6',
            'We are redirected to Results page.'
        );
    });
});