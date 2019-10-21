const assert = require('assert');
const app = require('../../src/app');

describe('\'urbanship\' service', () => {
  it('registered the service', () => {
    const service = app.service('urbanship');

    assert.ok(service, 'Registered the service');
  });
});
