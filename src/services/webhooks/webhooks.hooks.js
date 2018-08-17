const errors = require("@feathersjs/errors");

function emitingEvent(app, data) {

  this.app.service('user').emit('created', app.result);
  data();
}

function returnStatus(app, data) {

  console.log("app: ", app.error);

  data();
}

const errorHandler = ctx => {
  if (ctx.error) {
    const error = ctx.error;
    if (!error.code) {
      const newError = new errors.Forbidden("server error");
      ctx.error = newError;
      return ctx;
    }
    if (error.code === 404 || process.env.NODE_ENV === "production") {
      error.stack = null;
    }
    return ctx;
  }
};

module.exports = {
  before: {
    all: [],
    find: [],
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
    create: [emitingEvent],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [errorHandler],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
