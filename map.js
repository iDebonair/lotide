const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback){
  const results = [];
  for(let item of array){
    results.push(callback(item));
  } 
  return results;

}
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
const results1 = map(words, word => word[0]);
assertArrayEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArrayEqual(results1, ['g', 'c', 't', 'z', 't'])