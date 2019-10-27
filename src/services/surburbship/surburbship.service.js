// Initializes the `surburbship` service on path `/surburbship`
const createService = require('feathers-sequelize');
const createModel = require('../../models/surburbship.model');
const hooks = require('./surburbship.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/surburbship', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('surburbship');

  service.hooks(hooks);
};
