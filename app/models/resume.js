import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
    degrees: DS.hasMany('degree', { async: false }),
    experiences: DS.hasMany('experience', { async: false }),
    skills: DS.hasMany('skill', { async: false }),

    student: DS.belongsTo('student'),
});