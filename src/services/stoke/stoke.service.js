// Initializes the `stoke` service on path `/stoke`
const createService = require('feathers-sequelize');
const createModel = require('../../models/stoke.model');
const hooks = require('./stoke.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/stoke', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('stoke');

  service.hooks(hooks);
};
