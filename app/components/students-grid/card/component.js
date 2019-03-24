import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
    'data-test-card': readOnly('student.fullName'),
    classNames: ['students-grid__card'],

    router: service(),

    click() {
        this.router.transitionTo('students.student', this.student.id);
    },

    actions: {
        loadDefaultImage() {
            this.set('failedToLoadImage', true);
        },
    },
});