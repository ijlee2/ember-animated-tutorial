import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log(`Load student with id ${params.id}`);

        return this.store.loadRecord('student', params.id, {
            include: 'resumes,resumes.degrees,resumes.experiences,resumes.skills',
        });
    },
});