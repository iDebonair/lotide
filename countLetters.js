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

module.exports = countLetters;