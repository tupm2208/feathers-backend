// Initializes the `exchanges` service on path `/exchanges`
const createService = require('feathers-sequelize');
const createModel = require('../../models/exchanges.model');
const hooks = require('./exchanges.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/exchanges', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('exchanges');

  service.hooks(hooks);
};
