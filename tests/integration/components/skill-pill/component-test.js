import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | skill-pill', function(hooks) {
    setupRenderingTest(hooks);

    test('We can create the pill', async function(assert) {
        assert.expect(4);

        this.setProperties({
            skill: {
                id: '1',
                name: 'JavaScript',
                type: 'frontend',
                isSelected: false,
            },

            onChangeHandler: () => {
                assert.ok(true, 'We can click on the pill.');
            },
        });

        await render(hbs`<SkillPill @skill={{skill}} @onChangeHandler={{onChangeHandler}} />`);

        assert.dom('[data-test-icon]', this.element)
            .hasText('add_circle', 'We see the correct icon.');

        assert.dom('[data-test-name]', this.element)
            .hasText('JavaScript', 'We see the correct name.');

        assert.dom('[data-test-pill]', this.element)
            .hasClass('skill-pill--frontend', 'We see the correct CSS class.');

        await click('[data-test-pill]');
    });
});