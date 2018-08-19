// Initializes the `receivers` service on path `/receivers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/receivers.model');
const hooks = require('./receivers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/receivers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('receivers');

  service.hooks(hooks);
};
