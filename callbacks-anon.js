var input = [
  { x: 3, y: 4, z: 3 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },
];

// var obj1 = { x: 3, y: 4, z: 3 };
// var obj2 = { x: 12, y: 5 };
// var obj3 = { x: 8, y: 15 };

// var someArray = [obj1, obj2, obj3];

// var shortNames = { 'thomas': 'tom', 'william': 'bill', 'tommy': 'tom' }
// var longNames = { tom: 'thomas', }

// function shortNameFor(name) {
//   return shortNames[name]; //shortNames["thomas"]
// }

// console.log(`Short name for Thomas is ${shortNameFor('thomas')}`);
// console.log(`Short name for William is ${shortNameFor('william')}`);

// console.log(input[0]["x"]);
// console.log(((input[0].x)*3) + (input[0].y)*4);


var result = input.map(function(obj) {
  return (obj.x ** 2 + obj.y ** 2) ** 0.5;
});



console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);





// var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// var evens = numbers.filter(function(num) {
//   return (num % 2 == 0);
// });
// console.log("Subset of even numbers:", evens);