import Controller from '@ember/controller';
import { easeIn } from 'ember-animated/easings/cosine';
import move from 'ember-animated/motions/move';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import { task } from 'ember-concurrency';
import fetch from 'fetch';

export default Controller.extend({
    init() {
        this._super(...arguments);

        this.set('MAX_NUM_SELECTED_SKILLS', 10);
    },

    *transition({ insertedSprites, keptSprites, removedSprites }) {
        // We can use point-free style
        insertedSprites.forEach(fadeIn);

        keptSprites.forEach(sprite => {
            move(sprite, { easing: easeIn });
        });

        removedSprites.forEach(fadeOut);
    },

    searchStudents: task(function*() {
        const skillIds = this.selectedSkills.mapBy('id').join(',');

        if (skillIds) {
            yield fetch(`/search?skillIds=${skillIds}`)
                .then(response => {
                    return response.json();
                });
        }

    }).drop(),

    actions: {
        searchSkills() {
            const query = (this.query || '').trim().toLowerCase();

            if (query) {
                this.set('filteredRemainingSkills', this.remainingSkills.filter(skill => {
                    const name = (skill.name || '').trim().toLowerCase();

                    if (name.includes(query)) {
                        return true;
                    }

                    let synonymFound = false;

                    skill.synonyms.forEach(synonym => {
                        if (synonym.includes(query)) {
                            synonymFound = true;

                            return;
                        }
                    });

                    return synonymFound;
                }));

            } else {
                this.set('filteredRemainingSkills', this.remainingSkills);

            }
        },

        unSelectSkill(skill) {
            skill.set('isSelected', false);

            // With animation on, the user can click on a skill multiple times.
            // We ensure that the state is correct by checking for uniqueness.
            if (!this.remainingSkills.includes(skill)) {
                this.remainingSkills.pushObject(skill);
            }

            this.selectedSkills.removeObject(skill);
        },

        selectSkill(skill) {
            if (this.selectedSkills.length < this.MAX_NUM_SELECTED_SKILLS) {
                skill.set('isSelected', true);

                if (!this.selectedSkills.includes(skill)) {
                    this.selectedSkills.pushObject(skill);
                }

                this.filteredRemainingSkills.removeObject(skill);
                this.remainingSkills.removeObject(skill);
            }
        },
    },
});