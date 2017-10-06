var countdownGenerator = function(x) {
  var countdown = x
  return function() {
    if (countdown === 0) {
      console.log("Blast Off!");
    }
    else if(countdown < 0) {
      console.log("Rockets already gone, bub!");
    }
    else {
      console.log("T-minus " + countdown);
    };
    countdown--;

  }
};


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


