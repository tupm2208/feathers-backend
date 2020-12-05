const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const grantRights = require('../../util/grantRights')({idField: 'id', ownerField: 'id', expandPaths: true});

function order(context) {

    const { query = {} } = context.params;

    if (!query.$sort) {
        query.$sort = {
            id: -1
        }
    }

    context.params.query = query;
    // console.log("query: ", query)

    if(query.role == 'shiper') {
      query.role = {
        $or: ['shiperjp', 'shiperuk']
      }
    }

    if(query.role == 'innerShip') {
      query.role = {
        $or: ['urbanShiper', 'suburbShip']
      }
    }
}

function setUpdatedAt(data) {

  data.params.query.updatedAt = new Date();
}

function setRole(hook) {

    if (!hook.params.provider) {
        return hook;
    }

    if(hook.params && hook.params.user && hook.params.user.role === 'admin') {
        console.log("setrole: admin", hook.data)
        return hook;
    }

    hook.data.role = 'client';

    return hook;
}

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt'), grantRights, order ],
    get: [ authenticate('jwt'), grantRights ],
    create: [ authenticate('jwt'), hashPassword(), setRole ],
    // create: [hashPassword(), setRole ],
    update: [ hashPassword(),  authenticate('jwt'), grantRights, setRole ],
    patch: [ hashPassword(),  authenticate('jwt'), grantRights, setRole ],
    remove: [ authenticate('jwt'), grantRights, setRole ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password'), protect('fbToken')
    ],
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
