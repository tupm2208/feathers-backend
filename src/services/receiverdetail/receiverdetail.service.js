// Initializes the `receiverdetail` service on path `/receiverdetail`
const createService = require('feathers-sequelize');
const createModel = require('../../models/receiverdetail.model');
const hooks = require('./receiverdetail.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/receiverdetail', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('receiverdetail');

  service.hooks(hooks);
};
