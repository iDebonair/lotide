//head function returns the first element of an array, list parameter is an is an array 
function head(list){
  return list[0];
}


const assertEqual = require('./assertEqual');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");