const { authenticate } = require('@feathersjs/authentication').hooks;

function associate(hook) {
  if (hook.params.query.include) {
    const AssociatedModel = hook.app.services.billdetail.Model;
    const UserModel = hook.app.services.users.Model;
    hook.params.sequelize = {
      include: [
        { model: AssociatedModel, as: 'billdetail', required: false, attributes: ['productId', 'quantity'] },
        { model: UserModel, as: 'user', attributes: ['id', 'name', 'phone'] }
      ],
      raw: false
    };
    delete hook.params.query.include;
  }
  console.log("query: ", hook.params.query)
  if (hook.params.query.reservationId == '' || hook.params.query.reservationId == 'null') {
    hook.params.query.reservationId = null
  }
  
  return Promise.resolve(hook);
}

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [associate],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
