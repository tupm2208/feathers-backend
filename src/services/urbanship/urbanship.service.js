// Initializes the `urbanship` service on path `/urbanship`
const createService = require('feathers-sequelize');
const createModel = require('../../models/urbanship.model');
const hooks = require('./urbanship.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/urbanship', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('urbanship');

  service.hooks(hooks);
};
