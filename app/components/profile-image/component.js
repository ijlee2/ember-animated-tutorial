import Component from '@ember/component';
import { observer } from '@ember/object';

export default Component.extend({
    classNames: ['profile-image'],

    failedToLoadImage: false,

    onUrlChange: observer('imageUrl', function() {
        this.set('failedToLoadImage', false);
    }),

    actions: {
        loadDefaultImage() {
            this.set('failedToLoadImage', true);
        },
    },
});