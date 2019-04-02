import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
    name: DS.attr('string'),
    category: DS.attr('string'),
    synonyms: DS.attr(),
});