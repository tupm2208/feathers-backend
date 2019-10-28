const users = require('./users/users.service.js');
const user = require('./user/user.service.js');
const webhooks = require('./webhooks/webhooks.service.js');
const bills = require('./bills/bills.service.js');
const billdetail = require('./billdetail/billdetail.service.js');
const reservations = require('./reservations/reservations.service.js');
const reservationdetail = require('./reservationdetail/reservationdetail.service.js');
const exchanges = require('./exchanges/exchanges.service.js');
const products = require('./products/products.service.js');
const stoke = require('./stoke/stoke.service.js');
const urbanship = require('./urbanship/urbanship.service.js');
const surburbship = require('./surburbship/surburbship.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  // app.configure(user);
  app.configure(webhooks);
  app.configure(bills);
  app.configure(billdetail);
  app.configure(reservations);
  app.configure(reservationdetail);
  app.configure(exchanges);
  app.configure(products);
  app.configure(stoke);
  app.configure(urbanship);
  app.configure(surburbship);
};
