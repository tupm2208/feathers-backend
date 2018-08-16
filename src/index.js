/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const fs = require('fs');
const https  = require('https');


console.log("(process.env.PORT: ",process.env.PORT);

const server = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(process.env.PORT || port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);


app.setup(server);

logger.info('Feathers application started on http://%s:%d', app.get('host'), port)

// const server = app.listen(port);
// server.on('listening', () =>
//   logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
// );
