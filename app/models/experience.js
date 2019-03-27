import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    company: DS.attr('string'),
    achievements: DS.attr(),
});