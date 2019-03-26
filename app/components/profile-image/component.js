import Component from '@ember/component';
import { observer } from '@ember/object';

export default Component.extend({
    'data-test-profile-image': true,
    classNames: ['profile-image'],

    failedToLoadImage: false,

    onUrlChange: observer('imageUrl', function() {
        this.set('failedToLoadImage', false);
    }),

    actions: {
        loadDefaultImage() {
            if (this.isDestroyed || this.isDestroying) {
                return;
            }

            this.set('failedToLoadImage', true);
        },
    },
});