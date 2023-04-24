const eqArrays = (actual, expected) => { 
  if (actual.length !== expected.length){
    return false;
  }
  for(let i = 0; i < actual.length; i++) {
    if(actual[i] !== expected[i])
    return false;
};
return true;
};

const arr1 = [1, 2, [3, 4], 5, [6]];
console.log (arr1.flat());

// const assertArrayEqual = (actual, expected) => {
// if (eqArrays(actual, expected)){
//   console.log (`Assertion Passed: ${actual} === ${expected}`)
// } else{
//   console.log (`Assertion Failed: ${actual} !== ${expected}`)
// }
// }

// assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false
