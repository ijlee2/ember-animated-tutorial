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

    async model(params) {
        const { sid: skillIds } = params;

        if (skillIds) {
            const response = await fetch(`/search?skillIds=${skillIds}`);
            const payload = await response.json();

            return payload;
        }

        return [];
    },
});