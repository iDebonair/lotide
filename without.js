const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = (actual, expected) => {
  return actual.filter(arr => !expected.includes(arr));
};
module.exports = without;

