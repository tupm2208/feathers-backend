const adidas = require('./adidas/adidas.service.js');
const users = require('./users/users.service.js');
const room = require('./room/room.service.js');
const order = require('./order/order.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(adidas);
  app.configure(users);
  app.configure(room);
  app.configure(order);
};
