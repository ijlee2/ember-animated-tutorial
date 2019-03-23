import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | student-details', function(hooks) {
    setupRenderingTest(hooks);

    test('We can create the details', async function(assert) {
        this.set('student', {
            fullName: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '(123) 456-7890',
            internationalPhone: '+1-123-456-7890',
        });

        await render(hbs`<StudentDetails @student={{this.student}} />`);

        assert.dom('[data-test-name]', this.element)
            .hasText('Jane Smith', 'We see the correct name.');

        assert.dom('[data-test-email]', this.element)
            .hasText('jane.smith@example.com', 'We see the correct email.');

        assert.dom('[data-test-phone]', this.element)
            .hasText('(123) 456-7890', 'We see the correct phone.');
    });
});