
var array = [10, 2, 5, 9, 1];
array.sort(function compareNumbers(a, b) {
  return a - b;
});

console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); 
  var nameB = b.name.toUpperCase();
  var ageA = a.age;
  var ageB = b.age;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
    if (ageA > ageB) {
      return -1;
    }
    else 
      return 1;
});



console.log(students);
