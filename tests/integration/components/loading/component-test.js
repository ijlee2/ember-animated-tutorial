import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | loading', function(hooks) {
    setupRenderingTest(hooks);

    test('We can see the loading spinner', async function(assert) {
        await render(hbs`<Loading />`);

        assert.dom('[data-test-message]', this.element)
            .hasText('Loading', 'We see the loading message.');
    });
});