import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | student', function(hooks) {
    setupTest(hooks);

    test('We see the correct computed properties', function(assert) {
        let store = this.owner.lookup('service:store');
        let model = store.createRecord('student', {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '(123) 456-7890',
        });

        assert.strictEqual(model.fullName, 'Jane Smith', 'We see the correct full name.');
        assert.strictEqual(model.internationalPhone, '+1-123-456-7890', 'We see the correct international phone.');
    });
});