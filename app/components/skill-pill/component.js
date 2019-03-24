import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    'data-test-pill': true,
    classNames: ['skill-pill'],
    classNameBindings: ['skillType'],

    skillType: computed('skill.type', function() {
        return `skill-pill--${this.skill.type}`;
    }),

    click(event) {
        event.preventDefault();
        this.onChangeHandler();

        return false;
    },
});