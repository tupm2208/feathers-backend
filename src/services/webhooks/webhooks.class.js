/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup(app) {
    console.log("setup running: ", app);
    this.app = app;
  }

  find (params) {
    return new Promise((resolve, reject) => {
      console.log("params: ", params);
      let VERIFY_TOKEN = "bomaylaisomayquacoe"

      // Parse the query params
      if(!params || !params.query) {
        reject({});
        return;
      }
      let mode = params.query['hub.mode'];
      let token = params.query['hub.verify_token'];
      let challenge = params.query['hub.challenge'];

      // Checks if a token and mode is in the query string of the request
      if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

          // Responds with the challenge token from the request
          console.log('WEBHOOK_VERIFIED');
          resolve(challenge);

        } else {
          // Responds with '403 Forbidden' if verify tokens do not match
          reject(false);
        }
      } else {
        reject(false);
      }
    });
  }

  get (id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create (data, params) {
    // if (Array.isArray(data)) {
    //   return Promise.all(data.map(current => this.create(current, params)));
    // }

    return new Promise( (resolve, reject) => {
      console.log("params: ", data, params);
      resolve(data);
    });
  }

  update (id, data, params) {
    return Promise.resolve(data);
  }

  patch (id, data, params) {
    return Promise.resolve(data);
  }

  remove (id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
