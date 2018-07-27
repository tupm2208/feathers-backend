const adidas = require('./adidas/adidas.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(adidas);
};
