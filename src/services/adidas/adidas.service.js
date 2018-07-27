// Initializes the `adidas` service on path `/adidas`
const createService = require('feathers-sequelize');
const createModel = require('../../models/adidas.model');
const hooks = require('./adidas.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/adidas', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('adidas');

  service.hooks(hooks);
};
