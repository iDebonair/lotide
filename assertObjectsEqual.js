  const assertEqual = (actual, expected) => {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log (`Assertion Failed: ${actual}!== ${expected}`);
    }
  };


  const eqArrays = (actual, expected) => { 
    if(!Array.isArray(actual) || !Array.isArray(expected)){
      return false;
    }
    for(let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]){
        return false;
      }
    }
    return true;
  };



  const eqObjects = function(object1, object2){
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if(keys1.length !== keys2.length){
      return false;
    }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if(eqObjects(actual, expected)) {
      console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject= { size: "medium", color: "red" };
    assertObjectsEqual(shirtObject, anotherShirtObject);
    
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
    
    const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);

