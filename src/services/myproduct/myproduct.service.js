// Initializes the `myproduct` service on path `/myproduct`
const { Myproduct } = require('./myproduct.class');
const createModel = require('../../models/myproduct.model');
const hooks = require('./myproduct.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/myproduct', new Myproduct(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('myproduct');

  service.hooks(hooks);
};
