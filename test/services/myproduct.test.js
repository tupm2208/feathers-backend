const assert = require('assert');
const app = require('../../src/app');

describe('\'myproduct\' service', () => {
  it('registered the service', () => {
    const service = app.service('myproduct');

    assert.ok(service, 'Registered the service');
  });
});
