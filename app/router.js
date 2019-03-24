import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

Router.map(function() {
    this.route('search', function() {
        this.route('results');
    });

    this.route('students', function() {
        this.route('student', { path: '/:id' });
    });
});

export default Router;