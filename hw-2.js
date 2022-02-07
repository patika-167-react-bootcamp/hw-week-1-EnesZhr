const array = ["AUDI","bmw","MERCEDES"];

Array.prototype.includesCI = function (val) {
  return this.some((i) => i.toLowerCase() === val.toLowerCase())
  
}

console.log(array.includesCI("BmW"));
console.log(array.includesCI("aUdi"));
console.log(array.includesCI("MERCEDES"));
console.log(array.includesCI("LandRover"));