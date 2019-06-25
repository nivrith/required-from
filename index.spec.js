const requiredFrom = require('./index');
const assert = require('assert');

describe('Required From', function () {
  it('should return a string when required by parent', function () {
    assert.equal(typeof requiredFrom(), 'string');
  });
});
