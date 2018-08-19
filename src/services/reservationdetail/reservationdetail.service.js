// Initializes the `reservationdetail` service on path `/reservationdetail`
const createService = require('feathers-sequelize');
const createModel = require('../../models/reservationdetail.model');
const hooks = require('./reservationdetail.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/reservationdetail', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('reservationdetail');

  service.hooks(hooks);
};
