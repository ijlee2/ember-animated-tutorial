import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    category: DS.attr('string'),
    synonyms: DS.attr(),
});