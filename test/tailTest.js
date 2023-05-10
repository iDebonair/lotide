const assert = require('chai').assert;
const { strictEqual } = require('assert');
const assertEqual = require('../assertEqual');

const tail = require('../tail');

describe("#tail", () => {
  it("returns '3' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual (assertEqual(['Yo Yo', 'Lighthouse', 'Labs'], 3))
  })
})

