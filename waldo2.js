// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  arr.forEach(function(person, position) {
    console.log('\tIs this waldo?', person)
    if (person === "Waldo") {
      console.log('\t\tabout to do something with waldo')
      found(position);
      console.log('\t\tdone something with waldo')
    } else {
      console.log('\tThat was not waldo');
    }
  });
}

function actionWhenFound(position) {
  
  console.log("\t\t\tFound him!" + " " + position);

  
}

console.log('About to look for waldo');
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
console.log('Done looking for waldo');



















// function findWaldo(arr, found) {
//   arr.forEach(function(actionWhenFound){
//       console.log("found Him!)" + " "
//     });
//   }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"]



//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(position) {
  
//   console.log("Found him!" + " " + position);
  
// }


// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
// forEach()


// const arr = ['a', 'b', 'c'];

// a