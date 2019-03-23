import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['student-card'],

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