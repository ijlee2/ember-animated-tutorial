import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        sid: {
            refreshModel: true,
        },
    },

    renderTemplate() {
        this.render({
            into: 'application',
        });
    },

    model(params) {
        const { sid: skillIds } = params;

        if (skillIds) {
            return fetch(`/search?skillIds=${skillIds}`)
                .then(response => {
                    return response.json();
                });
        }

        return [];
    },
});