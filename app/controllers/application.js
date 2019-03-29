import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),

    currentRoute: computed('router.currentRouteName', function() {
        const currentRouteName = (this.router.currentRouteName || '')
            .replace(/\.index/g, '')
            .replace(/_loading/g, '')
            .replace(/\./g, '__');

        return `my-route__${currentRouteName}`;
    }),
});