import DS from 'ember-data';

export default DS.Model.extend({
    degrees: DS.attr(),
    experiences: DS.hasMany('experience', { async: false }),
    skills: DS.hasMany('skill', { async: false }),

    student: DS.belongsTo('student'),
});