import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    router: service(),

    isViewingParentRoute: computed('router.currentRouteName', function() {
        return this.router.currentRouteName === 'students.index';
    }),
});