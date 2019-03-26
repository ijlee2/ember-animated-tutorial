import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
    'data-test-details': true,
    classNames: ['student-details'],
    tagName: 'article',

    // For simplicity, we assume that each student has only one resume
    resume: alias('student.resumes.firstObject'),
});