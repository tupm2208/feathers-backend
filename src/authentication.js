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

    try {
      // console.log("req: ", request);
      const {email, socialId, socialToken} = request.body;

      verifyFacebook("EAAJZCWP2r078BAL3u108m7ZBO2HCc40jJTXJpFHfgORCFDRjTScafZB36KVX0lO02e0UoqTm0qLrmNxwxZA5YGn4WZAyDvQnV2Xg87lyvXfZBj196LPnBMnVjxCFabYlluZCZCkI0uGWIjwQsbNhO9PZBtzZBmS9DPEfyY9dUpReCZAcPxTeZB22PZCP3w4DmKJavhbbCahrmnBa2wgZDZD").then(succes => {}, error => {})
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
