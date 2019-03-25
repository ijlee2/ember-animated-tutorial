import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | multiply', function(hooks) {
    setupRenderingTest(hooks);

    test('We can use the helper', async function(assert) {
        await render(hbs`{{multiply}}`);

        assert.strictEqual(this.element.textContent.trim(), '');

        await render(hbs`{{multiply 100}}`);

        assert.strictEqual(this.element.textContent.trim(), '100');

        await render(hbs`{{multiply 100 0}}`);

        assert.strictEqual(this.element.textContent.trim(), '0');

        await render(hbs`{{multiply -100 1}}`);

        assert.strictEqual(this.element.textContent.trim(), '-100');

        await render(hbs`{{multiply 100 2}}`);

        assert.strictEqual(this.element.textContent.trim(), '200');

        await render(hbs`{{multiply 1000 1 2}}`);

        assert.strictEqual(this.element.textContent.trim(), '2000');

        await render(hbs`{{multiply 1000 2 30}}`);

        assert.strictEqual(this.element.textContent.trim(), '60000');
    });
});