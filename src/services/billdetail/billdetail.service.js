// Initializes the `billdetail` service on path `/billdetail`
const createService = require('feathers-sequelize');
const createModel = require('../../models/billdetail.model');
const hooks = require('./billdetail.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/billdetail', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('billdetail');

  service.hooks(hooks);
};
