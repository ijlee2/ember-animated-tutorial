import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | skill-pill', function(hooks) {
    setupRenderingTest(hooks);

    test('We can create the pill', async function(assert) {
        this.set('skill', {
            id: '1',
            name: 'JavaScript',
            type: 'frontend',
            isSelected: false,
        });

        await render(hbs`<SkillPill @skill={{this.skill}}/>`);

        assert.dom('[data-test-icon]', this.element)
            .hasText('add_circle', 'We see the correct icon.');

        assert.dom('[data-test-name]', this.element)
            .hasText('JavaScript', 'We see the correct name.');
    });
});