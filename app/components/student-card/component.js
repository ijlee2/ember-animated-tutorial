import Component from '@ember/component';

export default Component.extend({
    classNames: ['student-card'],

    actions: {
        loadDefaultImage() {
            this.set('failedToLoadImage', true);
        },
    },
});