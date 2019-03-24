import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | students-grid', function(hooks) {
    setupRenderingTest(hooks);

    test('We can create the grid', async function(assert) {
        await render(hbs`<StudentsGrid />`);

        assert.equal(this.element.textContent.trim(), '');
    });
});