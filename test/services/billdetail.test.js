const assert = require('assert');
const app = require('../../src/app');

describe('\'billdetail\' service', () => {
  it('registered the service', () => {
    const service = app.service('billdetail');

    assert.ok(service, 'Registered the service');
  });
});
