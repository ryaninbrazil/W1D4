function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var pointer = 0;
  /* your code here */

  return function() {
    return list.shift();
    // var thingToReturn =  list[pointer];
    // pointer++;
    // return thingToReturn;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6