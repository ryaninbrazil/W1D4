var words = ["ground", "control", "to", "major", "tom"];

var aa = words.map(function(item) {return item.length});
console.log(aa);

var aa = words.map(function(item) {return item.split('').reverse().join('')});
console.log(aa);

var aa = words.map(function(item) {return item.toUpperCase()});
console.log(aa);

// function sort(word) {
//   var transformed = [];
//     for (i = 0; i <= words.length; i++); {
//       transformed[i] = word[i].length;
//     }

//   return transformed;
// }

// console.log(sort(words));







// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });



// 
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]