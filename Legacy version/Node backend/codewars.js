/* function digital_root(n) {
  if (n < 0) n = n * -1

  if (n.toString().length === 1) return n
  else {
    var sum = 0

    while (true) {

      sum += n % 10
      n = Math.floor(n / 10)

      if (n === 0) break

    }

    return digital_root(sum)
  }
} */

/* function digital_root(n){
  return (n - 1) % 9 + 1;
}

console.log(digital_root(133)) */


function getCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  return (str.split("").filter((x) => vowels.indexOf(x) != -1)).length
}

console.log(getCount('sayak'))