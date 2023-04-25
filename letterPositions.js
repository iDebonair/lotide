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

const eqArrays = (actual, expected) => { 
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArrayEqual(letterPositions("hello").e, [1]); 
assertArrayEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); 