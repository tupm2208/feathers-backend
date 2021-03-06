// Initializes the `reservations` service on path `/reservations`
const createService = require('feathers-sequelize');
const createModel = require('../../models/reservations.model');
const hooks = require('./reservations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/reservations', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('reservations');

  service.hooks(hooks);
};
