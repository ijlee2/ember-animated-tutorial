import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
    title: DS.attr('string'),
    company: DS.attr('string'),
    achievements: DS.attr(),
});