import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
    degrees: DS.hasMany('degree', { async: true }),
    experiences: DS.hasMany('experience', { async: true }),
    skills: DS.hasMany('skill', { async: true }),

    student: DS.belongsTo('student'),
});