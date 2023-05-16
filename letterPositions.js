const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }
  return results;
};

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual')
module.exports = letterPositions;