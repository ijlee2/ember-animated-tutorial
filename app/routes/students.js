import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        console.log('Load all students');

        return this.store.loadRecords('student');
    },
});