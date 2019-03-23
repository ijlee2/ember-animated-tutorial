import DS from 'ember-data';

export default DS.Model.extend({
    skills: DS.hasMany('skill', { async: false }),
    experiences: DS.attr(),

    student: DS.belongsTo('student'),
});