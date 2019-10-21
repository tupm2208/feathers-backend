const assert = require('assert');
const app = require('../../src/app');

describe('\'suburbship\' service', () => {
  it('registered the service', () => {
    const service = app.service('suburbship');

    assert.ok(service, 'Registered the service');
  });
});
