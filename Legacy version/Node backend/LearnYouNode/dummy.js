function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}


var time = 5
var carPos = [1, 1, 1]

var newPos = carPos.map(x => (getRandomArbitrary(0, 1) > 0.3) ? x + 1 : x)

// calls func with args itValue number of times
// return a list with all those values


// pseudocode
// call newPos 5 times
// for each of those calls, you have to draw the lines


function drawALine(args) {
  return '-'
}

function curryNTimes(itValue) {
  return function (func, args = undefined, newList = []) {
    if (itValue > 0) newList = doSomethingNTimes(func, itValue - 1)
    return newList.push(func(args))
  }
}

var runFiveTimes = curryNTimes(5);

var graphPos = newPos.map(



