function findKeyByValue (actual, expected){
  for(const key of Object.keys(actual)){
    if(actual[key] === expected){
      return key;
    }
  }
  return undefined;
}
module.exports = findKeyByValue;