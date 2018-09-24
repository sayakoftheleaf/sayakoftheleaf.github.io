function findOdd(arr) {
  
  return parseInt(oddVal(giveCounts(arr)), 10)
}

// makes a dictionary with the individual values that
// appear in the array as keys and their appearances 
// as values
// returns the dictionary as an object

function giveCounts(arr, counts = {}){
  arr.forEach(x => counts[x] = (counts[x] || 0) + 1)
      
  console.log(counts)
  return counts
}
  
// takes an object and returns a string 
// with the key that has an odd value
// associated with it

function oddVal(object){
  for (key in object){
    // if the count is odd, return the key
    if (object[key] & 1) return key
  }
}


var arr = [20, 1, 1, 2, 2]

console.log(findOdd(arr))

