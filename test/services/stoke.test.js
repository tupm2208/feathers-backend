const assert = require('assert');
const app = require('../../src/app');

describe('\'stoke\' service', () => {
  it('registered the service', () => {
    const service = app.service('stoke');

    assert.ok(service, 'Registered the service');
  });
});
