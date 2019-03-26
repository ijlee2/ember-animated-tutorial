import Component from '@ember/component';

export default Component.extend({
    'data-test-profile-image': true,
    classNames: ['profile-image'],

    didReceiveAttrs() {
        this._super(...arguments);

        this.set('failedToLoadImage', false);
    },

    actions: {
        loadDefaultImage() {
            this.set('failedToLoadImage', true);
        },
    },
});