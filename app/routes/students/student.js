import Route from '@ember/routing/route';

export default Route.extend({
    renderTemplate() {
        this.render({
            into: 'application',
        });
    },

    model(params) {
        return this.store.loadRecord('student', params.id, {
            include: 'resumes.skills',
        });
    },
});