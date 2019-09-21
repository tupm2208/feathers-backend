const { authenticate } = require('@feathersjs/authentication').hooks;

function associate(hook) {
	if (hook.params.query.include) {
        const AssociatedModel = hook.app.services.receiverdetail.Model;
        const UserModel = hook.app.services.users.Model;
		hook.params.sequelize = {
            include: [{ model: AssociatedModel, as: 'receiverdetail',required: false }, {model: UserModel, as: 'user', attributes: ['id', 'name', 'role','phone', 'exchangeOdds']}],
            raw: false
		};
	}
  
  delete hook.params.query.include;
  
  return Promise.resolve(hook);
}

function validatePatch(hook) {
	if(hook.data.reservationId == '') {
		hook.data.reservationId = null
	}

	if(hook.data.arrivedDate == 'null' || hook.data.arrivedDate == '') {
		hook.data.arrivedDate = null
	}
	return Promise.resolve(hook);
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [associate],
    get: [],
    create: [],
    update: [],
    patch: [validatePatch],
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
