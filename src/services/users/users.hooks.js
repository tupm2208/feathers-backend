const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const grantRights = require('../../util/grantRights')({idField: 'id', ownerField: 'id', expandPaths: true});

function setCreatedAt(data) {

  data.params.query.createdAt = new Date();
  data.params.query.updatedAt = new Date();
}

function setUpdatedAt(data) {

  data.params.query.updatedAt = new Date();
}

function setRole(hook) {

    if (!hook.params.provider) {
        return hook;
    }

    if(hook.params.connection && hook.params.connection.user && hook.params.connection.user.role === 'admin') {
        return hook;
    }

    hook.data.role = 'client';

    return hook;
}

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt'), grantRights ],
    get: [ authenticate('jwt'), grantRights ],
    create: [ hashPassword(), setRole ],
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
