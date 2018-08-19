const assert = require('assert');
const app = require('../../src/app');

describe('\'receivers\' service', () => {
  it('registered the service', () => {
    const service = app.service('receivers');

    assert.ok(service, 'Registered the service');
  });
});
