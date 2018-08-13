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

  app.passport.use('social-token', new CustomStrategy( (request, callback) => {

    console.log("call: ", request.body);

    try {
      // console.log("req: ", request);
      const { facebookToken } = request.body;

      // verifyFacebook(facebookToken).then(succes => {}, error => {})
      // callback(true);
      app.service('users').find({query:{id:1}}).then(data => {
        console.log("data: ", data)
        callback(null, data.data[0]);
      }, error => {
        console.log("error: ", error);
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
