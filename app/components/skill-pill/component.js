import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
    'data-test-pill': readOnly('skill.name'),
    classNames: ['skill-pill'],
    classNameBindings: ['skillCategory'],

    skillCategory: computed('skill.category', function() {
        return `skill-pill--${this.skill.category}`;
    }),

    click() {
        this.onChangeHandler();
    },
});