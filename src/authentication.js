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

      verifyFacebook("EAAdapyUrZBW8BAE5peEKvOhK2dbqLJKO989sLfwFbQnxmIMCllr1kZA77z2bZArfjn1C7ocWaD7CZBHDH4V1oaCa4N8mZBFDXdGlhuMLpra2ZBsYH2laID4z7gPHaZAXfVNG4O6ZAJ97WGA2hkTcYkZAOmZBGEYAJFWRD7LZALi3XZBVrZBNBS6PnrNzSAaTbYnAH3eQPtb0I7zc6TQZDZD").then(succes => {}, error => {})
    } catch( error) {
      console.log("catch: ");
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
