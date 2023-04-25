// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log (`Assertion Failed: ${actual}!== ${expected}`);
//   }
// };
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const countLetters = function(sentence){
  const numberCount = {};
  for(const letter of sentence){
      if(numberCount[letter]){
        numberCount[letter] += 1;
      }
    else{
      numberCount[letter] = 1;
    }
  }
  return numberCount
}
console.log(countLetters('lighthouse in the house'));