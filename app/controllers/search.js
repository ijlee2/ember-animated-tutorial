import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { parallel } from 'ember-animated';
import { easeIn, easeOut } from 'ember-animated/easings/cosine';
import move from 'ember-animated/motions/move';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import { task } from 'ember-concurrency';

export default Controller.extend({
    router: service(),

    init() {
        this._super(...arguments);

        this.set('MAX_NUM_SELECTED_SKILLS', 15);
    },

    *transition({ insertedSprites, keptSprites, removedSprites }) {
        // We can use point-free style
        insertedSprites.forEach(fadeIn);

        keptSprites.forEach(sprite => {
            parallel(
                fadeIn(sprite),
                move(sprite, { easing: easeIn })
            );
        });

        removedSprites.forEach(sprite => {
            // sprite.endAtPixel({
            //     x: sprite.absoluteInitialBounds.left + 60,
            //     y: sprite.absoluteInitialBounds.top + 80,
            // });

            sprite.endTranslatedBy(60, 80);

            parallel(
                fadeOut(sprite),
                move(sprite, { easing: easeOut })
            );
        });
    },

    searchStudents: task(function*() {
        const skillIds = this.selectedSkills.mapBy('id').join(',');

        if (skillIds) {
            this.router.transitionTo('search.results', {
                queryParams: {
                    sid: skillIds,
                },
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
            if (!this.filteredRemainingSkills.includes(skill)) {
                this.filteredRemainingSkills.pushObject(skill);
            }

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