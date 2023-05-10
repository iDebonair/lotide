const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');
// const assertArrayEqual = (actual, expected) => {
// if (eqArrays(actual, expected)){
//   console.log (`Assertion Passed: ${actual} === ${expected}`)
// } else{
//   console.log (`Assertion Failed: ${actual} !== ${expected}`)
// }
// }
const middle = (arr) => {
  const newArrayLength = arr.length;
  if (newArrayLength <= 2) {
    return [];
  }
  if (newArrayLength % 2 === 0) {
    return [arr[newArrayLength / 2 - 1], arr[newArrayLength / 2]];
  } else {
    return [arr[Math.floor(newArrayLength / 2)]];
  }
};

module.exports = middle;