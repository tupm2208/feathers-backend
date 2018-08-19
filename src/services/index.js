const users = require('./users/users.service.js');
const user = require('./user/user.service.js');
const webhooks = require('./webhooks/webhooks.service.js');
const bills = require('./bills/bills.service.js');
const billdetail = require('./billdetail/billdetail.service.js');
const reservations = require('./reservations/reservations.service.js');
const reservationdetail = require('./reservationdetail/reservationdetail.service.js');
const receivers = require('./receivers/receivers.service.js');
const receiverdetail = require('./receiverdetail/receiverdetail.service.js');
const exchanges = require('./exchanges/exchanges.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  // app.configure(user);
  app.configure(webhooks);
  app.configure(bills);
  app.configure(billdetail);
  app.configure(reservations);
  app.configure(reservationdetail);
  app.configure(receivers);
  app.configure(receiverdetail);
  app.configure(exchanges);
};
