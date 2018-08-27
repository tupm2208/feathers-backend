const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
const CustomStrategy = require('passport-custom');
const verifyFacebook = require('./util/verifyFacebook');

module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());

  app.passport.use('social-token', new CustomStrategy(  (request, callback) => {

    try {
      const { socialToken } = request.body;

       verifyFacebook(socialToken).then(success => {

        app.service('users').find({query:{fbid: success.id}}).then( users => {

          if(users.data[0]) {

            console.log("user login: ", users.data[0]);
            app.service('users').emit('created', {more: true});
            callback(null, users.data[0]);
          } else {

            app.service('users').create({
              // fullname: success.name, email: success.name, fbid: success.id, fb_token: socialToken
              name: success.name,
              email: success.email,
              fbId: success.id,
              fbToken: socialToken
            }).then(data => {
              callback(null, data);
            }, error => {
              callback(false, error);
            })
          }
        }, error => {
          callback(false, error);
        })
      }, error => {

        callback(false, error);
      })

    } catch( error) {
      console.log("catch: ", error);
    }
  }))

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
