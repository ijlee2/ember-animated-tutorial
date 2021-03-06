import { computed } from '@ember/object';
import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
    /*************************************************************************************

        Personal information

    *************************************************************************************/
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    imageUrl: DS.attr('string'),


    /*************************************************************************************

        Model relationships

    *************************************************************************************/
    resumes: DS.hasMany('resume', { async: false }),


    /*************************************************************************************

        Computed properties

    *************************************************************************************/
    fullName: computed('firstName', 'lastName', function() {
        return `${this.firstName} ${this.lastName}`;
    }),

    initials: computed('firstName', 'lastName', function() {
        const firstNameInitial = (this.firstName || '').charAt(0).toUpperCase();
        const lastNameInitial = (this.lastName || '').charAt(0).toUpperCase();

        return `${firstNameInitial}${lastNameInitial}`;
    }),

    internationalPhone: computed('phone', function() {
        let phone = this.phone.replace(/[()]/g, '').replace(/\s+/g, '-');

        return `+1-${phone}`;
    }),
});