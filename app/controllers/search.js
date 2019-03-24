import Controller from '@ember/controller';

export default Controller.extend({
    init() {
        this._super(...arguments);

        this.set('MAX_NUM_SELECTED_SKILLS', 10);
    },

    actions: {
        searchSkills() {
            const query = (this.query || '').trim().toLowerCase();

            if (query) {
                this.set('filteredRemainingSkills', this.remainingSkills.filter(skill => {
                    const name = (skill.name || '').trim().toLowerCase();

                    return name.includes(query);
                }));

            } else {
                this.set('filteredRemainingSkills', this.remainingSkills);

            }
        },

        unSelectSkill(id) {
            let index = 0;

            for (index = 0; index < this.selectedSkills.length; index++) {
                if (this.selectedSkills.objectAt(index).id === id) {
                    break;
                }
            }

            let skill = this.selectedSkills.objectAt(index);

            this.remainingSkills.pushObject(skill);
            this.selectedSkills.removeAt(index);
        },

        selectSkill(id) {
            if (this.selectedSkills.length < this.MAX_NUM_SELECTED_SKILLS) {
                // Find the skill in the filtered list
                let index = 0;

                for (index = 0; index < this.filteredRemainingSkills.length; index++) {
                    if (this.filteredRemainingSkills.objectAt(index).id === id) {
                        break;
                    }
                }

                let skill = this.filteredRemainingSkills.objectAt(index);

                this.selectedSkills.pushObject(skill);
                this.filteredRemainingSkills.removeAt(index);
                this.remainingSkills.removeObject(skill);
            }
        },
    },
});