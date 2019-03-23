import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | material-icon', function(hooks) {
    setupRenderingTest(hooks);

    test('We can see the icon', async function(assert) {
        await render(hbs`{{material-icon icon="add"}}`);

        assert.dom('[data-test-icon]', this.element)
            .hasText('add', 'We see the correct icon.');

        await render(hbs`{{material-icon icon="delete"}}`);

        assert.dom('[data-test-icon]', this.element)
            .hasText('delete', 'We see the correct icon.');
    });
});