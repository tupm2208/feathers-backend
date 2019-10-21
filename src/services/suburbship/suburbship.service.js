// Initializes the `suburbship` service on path `/suburbship`
const createService = require('feathers-sequelize');
const createModel = require('../../models/suburbship.model');
const hooks = require('./suburbship.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/suburbship', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('suburbship');

  service.hooks(hooks);
};
