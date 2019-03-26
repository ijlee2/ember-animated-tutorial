import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
    'data-test-card': readOnly('student.fullName'),
    classNames: ['results-grid__card'],
    tagName: 'article',

    actions: {
        loadDefaultImage() {
            this.set('failedToLoadImage', true);
        },
    },
});