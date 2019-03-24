import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Adapter | skill', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let adapter = this.owner.lookup('adapter:skill');
        assert.ok(adapter);
    });
});