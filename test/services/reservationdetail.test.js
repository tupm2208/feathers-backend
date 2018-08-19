const assert = require('assert');
const app = require('../../src/app');

describe('\'reservationdetail\' service', () => {
  it('registered the service', () => {
    const service = app.service('reservationdetail');

    assert.ok(service, 'Registered the service');
  });
});
