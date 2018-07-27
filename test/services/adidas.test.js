const assert = require('assert');
const app = require('../../src/app');

describe('\'adidas\' service', () => {
  it('registered the service', () => {
    const service = app.service('adidas');

    assert.ok(service, 'Registered the service');
  });
});
