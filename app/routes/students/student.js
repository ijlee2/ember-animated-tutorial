import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.loadRecord('student', params.id, {
            include: 'resumes.degrees,resumes.experiences,resumes.skills',
        });
    },

    setupController(controller, model) {
        this._super(controller, model);

        controller.set('allStudents', this.store.peekAll('student'));
    },
});