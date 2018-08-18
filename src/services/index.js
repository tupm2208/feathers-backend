const users = require('./users/users.service.js');
const user = require('./user/user.service.js');
const webhooks = require('./webhooks/webhooks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  // app.configure(user);
  app.configure(webhooks);
};
