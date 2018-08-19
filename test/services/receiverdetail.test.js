const assert = require('assert');
const app = require('../../src/app');

describe('\'receiverdetail\' service', () => {
  it('registered the service', () => {
    const service = app.service('receiverdetail');

    assert.ok(service, 'Registered the service');
  });
});
