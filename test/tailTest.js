const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const input = ['Yo Yo', 'Lighthouse', 'Labs'];
    const expectedOutput = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(input), expectedOutput);
  });
});

