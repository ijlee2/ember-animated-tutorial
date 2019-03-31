import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { parallel } from 'ember-animated';
import move from 'ember-animated/motions/move';
import scale from 'ember-animated/motions/scale';

export default Component.extend({
    'data-test-nav': readOnly('name'),
    attributeBindings: ['name:aria-label'],
    classNames: ['navigation-drawer'],
    tagName: 'nav',

    router: service(),

    currentParentRoute: computed('router.currentURL', function() {
        let currentParentRoute = (this.router.currentURL || '').split('/')[1];

        return currentParentRoute || 'index';
    }),

    *transition({ receivedSprites }) {
        receivedSprites.forEach(sprite => {
            parallel(
                move(sprite),
                scale(sprite)
            );
        });
    },
});