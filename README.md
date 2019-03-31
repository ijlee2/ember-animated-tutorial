# Ember Animated Tutorial

This is the code companion to my [Animation and Predictable Data Loading in Ember](https://crunchingnumbers.live/), presented at the Ember ATX Meetup on 3/28/2019.

## How to Run

You can run the app as is. Ember Mirage will create random data each time.

1. Do `npm install`.
2. Run `ember s`, then visit `localhost:4200`.

You can also run the app on a local Postgres server (you need this for step-1d).

1. Set the environment variables `POSTGRES_USERNAME` and `POSTGRES_PASSWORD`.
```
export POSTGRES_USERNAME=<your username>
export POSTGRES_PASSWORD=<your password>
```
2. In `/config/environment.js`, please edit the `ember-cli-mirage` option under development environment.
```
if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
        enabled: false,
    };
}
```
3. In terminal, go to `/api` folder, then type `rake db:create db:migrate db:seed`.
4. Run `rails s`, then visit `localhost:3000`.

You can check how the project should look after each step, by running `git checkout` and specifying the branch name:


| Branch name | Added features                            |
| ----------- | ----------------------------------------- |
| step-1a     | Starter for {{link-to}} bug               |
| step-1b     | Starter for findRecord bug                |
| step-1c     | Starter for findAll bug                   |
| step-1d     | Starter for (n + 1) query bug             |
| step-2a     | Starter for animation with modifier       |
| step-2b     | Starter for animation with Ember Animated |
| master      | Completed                                 |