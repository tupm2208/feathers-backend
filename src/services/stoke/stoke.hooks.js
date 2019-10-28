const { authenticate } = require('@feathersjs/authentication').hooks;

function associate(hook) {
	if (hook.params.query.include) {
        const AssociatedModel = hook.app.services.billdetail.Model;
        const ReservationsModel = hook.app.services.reservations.Model;
		hook.params.sequelize = {
            include: [{model: ReservationsModel, as: 'reservation', required: false}]
		};
	}
	console.log("query: ", hook.params.query)
	if(hook.params.query.reservationId == '' || hook.params.query.reservationId == 'null') {
		hook.params.query.reservationId = null
	}
    delete hook.params.query.include;
	return Promise.resolve(hook);
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
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
