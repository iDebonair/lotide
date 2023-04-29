const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
};

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  console.log('---');
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);

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

const assertArrayEqual = (actual, expected) => {
  if (eqArrays(actual, expected)){
    console.log (`Assertion Passed: ${actual} === ${expected}`)
  } else{
    console.log (`Assertion Failed: ${actual} !== ${expected}`)
  }
}
// assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false


