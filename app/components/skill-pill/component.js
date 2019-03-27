import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    'data-test-pill': true,
    classNames: ['skill-pill'],
    classNameBindings: ['skillCategory'],

    skillCategory: computed('skill.category', function() {
        return `skill-pill--${this.skill.category}`;
    }),

    click(event) {
        event.preventDefault();

        this.onChangeHandler();
    },
});