import EmberObject from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.loadRecords('skill');
    },

    setupController(controller, model) {
        this._super(controller, model);

        controller.setProperties({
            query: '',

            selectedSkills: [],

            remainingSkills: model.map(skill => {
                return EmberObject.create({
                    id: skill.id,
                    name: skill.name,
                    category: skill.category,
                    synonyms: (skill.synonyms || []).map(synonym => {
                        return (synonym || '').trim().toLowerCase();
                    }),
                    isSelected: false,
                });
            }),
        });

        controller.set('filteredRemainingSkills', controller.remainingSkills);
    },
});