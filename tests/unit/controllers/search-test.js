import EmberObject from '@ember/object';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | search', function(hooks) {
    setupTest(hooks);

    hooks.beforeEach(function(assert) {
        let controller = this.owner.lookup('controller:search');

        controller.setProperties({
            query: '',
            selectedSkills: [],
            remainingSkills: [
                EmberObject.create({
                    id: '1',
                    name: 'ActionScript',
                    type: 'miscellaneous',
                    synonyms: [],
                    isSelected: false,
                }),

                EmberObject.create({
                    id: '2',
                    name: 'Ember',
                    type: 'frontend',
                    synonyms: ['Ember.js'],
                    isSelected: false,
                }),

                EmberObject.create({
                    id: '3',
                    name: 'Java',
                    type: 'backend',
                    synonyms: [],
                    isSelected: false,
                }),

                EmberObject.create({
                    id: '4',
                    name: 'JavaScript',
                    type: 'frontend',
                    synonyms: ['ES6', 'ES7', 'ES8', 'ES2017', 'ES2018', 'ES2019'],
                    isSelected: false,
                }),
            ],
        });

        controller.set('filteredRemainingSkills', controller.remainingSkills);

        assert.strictEqual(
            controller.selectedSkills.length,
            0,
            'We see 0 selected skills.'
        );

        assert.strictEqual(
            controller.remainingSkills.length,
            4,
            'We see 4 remaining skills.'
        );

        assert.strictEqual(
            controller.filteredRemainingSkills.length,
            4,
            'We see 4 filtered remaining skills.'
        );
    });


    test('We can search the remaining skills', function(assert) {
        let controller = this.owner.lookup('controller:search');

        // Do a search for the query 'java'
        controller.set('query', 'java');
        controller.send('searchSkills');

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            ['Java', 'JavaScript'],
            'We see the correct remaining skills.'
        );

        // Do a search for the query 'script'
        controller.set('query', 'script');
        controller.send('searchSkills');

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            ['ActionScript', 'JavaScript'],
            'We see the correct remaining skills.'
        );

        // Do a search for the query '123'
        controller.set('query', '123');
        controller.send('searchSkills');

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            [],
            'We see the correct remaining skills.'
        );

        // Do a search for the empty query
        controller.set('query', '');
        controller.send('searchSkills');

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            ['ActionScript', 'Ember', 'Java', 'JavaScript'],
            'We see the correct remaining skills.'
        );
    });


    test('We can select and unselect skills', function(assert) {
        let controller = this.owner.lookup('controller:search');

        // Select a skill
        controller.send('selectSkill', controller.remainingSkills.objectAt(1));

        assert.deepEqual(
            controller.selectedSkills.mapBy('name'),
            ['Ember'],
            'We see the correct selected skills.'
        );

        assert.deepEqual(
            controller.remainingSkills.mapBy('name'),
            ['ActionScript', 'Java', 'JavaScript'],
            'We see the correct remaining skills.'
        );

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            ['ActionScript', 'Java', 'JavaScript'],
            'We see the correct filtered remaining skills.'
        );

        // Select another skill
        controller.send('selectSkill', controller.remainingSkills.objectAt(2));

        assert.deepEqual(
            controller.selectedSkills.mapBy('name'),
            ['Ember', 'JavaScript'],
            'We see the correct selected skills.'
        );

        assert.deepEqual(
            controller.remainingSkills.mapBy('name'),
            ['ActionScript', 'Java'],
            'We see the correct remaining skills.'
        );

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            ['ActionScript', 'Java'],
            'We see the correct filtered remaining skills.'
        );

        // Unselect a skill
        controller.send('unSelectSkill', controller.selectedSkills.objectAt(0));

        assert.deepEqual(
            controller.selectedSkills.mapBy('name'),
            ['JavaScript'],
            'We see the correct selected skills.'
        );

        assert.deepEqual(
            controller.remainingSkills.mapBy('name'),
            ['ActionScript', 'Java', 'Ember'],
            'We see the correct remaining skills.'
        );

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            ['ActionScript', 'Java', 'Ember'],
            'We see the correct filtered remaining skills.'
        );

        // Unselect another skill
        controller.send('unSelectSkill', controller.selectedSkills.objectAt(0));

        assert.deepEqual(
            controller.selectedSkills.mapBy('name'),
            [],
            'We see the correct selected skills.'
        );

        assert.deepEqual(
            controller.remainingSkills.mapBy('name'),
            ['ActionScript', 'Java', 'Ember', 'JavaScript'],
            'We see the correct remaining skills.'
        );

        assert.deepEqual(
            controller.filteredRemainingSkills.mapBy('name'),
            ['ActionScript', 'Java', 'Ember', 'JavaScript'],
            'We see the correct filtered remaining skills.'
        );
    });
});