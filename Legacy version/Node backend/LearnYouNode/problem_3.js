// question - Write a program that uses a single asynchronous filesystem
// operation to read a file and print the number of newlines it contains to
// the console(stdout)

// The full path to the file to read will be provided as the first command line argument

const fs = require('fs');

// getting the filename from the command line
//
var pathName = process.argv[2];

var sum = 0;

// asynchronous way of doing things

fs.readFile(pathName, (err, data) => {
    if (err) throw err;

    // you can't just return data here, because that would be really easy
    // because the later parts of the function that might need this data would not have it

    // so you have to call functions here to do the job that you would otherwise do
    // with a return value
    // I can see why this gets ugly

    console.log(data.toString().split('\n').length - 1);
});


// Synchronous way of doing things

//var bs = fs.readFileSync(pathName);

/*var strArr = bs.toString();



for(x of strArr){
    if (x == '\n'){
        sum++;
    }
}

console.log(sum);
*/

