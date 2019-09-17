const { authenticate } = require('@feathersjs/authentication').hooks;

function associate(hook) {
	if (hook.params.query.include) {
        const AssociatedModel = hook.app.services.billdetail.Model;
        const UserModel = hook.app.services.users.Model;
		hook.params.sequelize = {
            include: [{ model: AssociatedModel, as: 'billdetail',required: false }, {model: UserModel, as: 'user', attributes: ['id', 'name', 'role','phone', 'exchangeOdds']}],
            raw: false
		};
	}
	console.log("query: ", hook.params.query)
	if(hook.params.query.reservationId == '' || hook.params.query.reservationId == 'null') {
		hook.params.query.reservationId = null
	}
    delete hook.params.query.include;
	return Promise.resolve(hook);
}

function validatePatch(hook) {
	if(hook.data.reservationId == '') {
		hook.data.reservationId = null
	}

	if(!hook.data.receiveDate) {
		delete hook.data.receiveDate
	}
	return Promise.resolve(hook);
}

module.exports = {
	before: {
		all: [ authenticate('jwt')],
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
