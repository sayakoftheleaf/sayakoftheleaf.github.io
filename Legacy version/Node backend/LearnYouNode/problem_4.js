// Create a program that prints a list of files in a given directory, 
// filtered by the extension of the files. You will be provided a directory name as the first 
// argument to your program (eg. '/path/to/dir') and a file extension to filter by as the
// second argument.

// For example, if you get 'txt' as the second argument then you will need to filter the
// list to only files that end with .txt. Note that the second argument will not come prefixed
// with a '.'

// NOTE: the first two values of process.argv are reserved for system info by Node.
// You must use asynchronous I/O, and print the list of files to the console, one file per line

const fs = require('fs');
const path = require('path');

var Name = process.argv[2];
//Name = `${__dirname}`
var exName = process.argv[3];
//exName = 'js' 

// open up the directory, store the files in the directory in arrFiles
// Then filter through those files and only keep the ones whose
// extensions match the given extension
fs.readdir(Name, (err, arrFiles) => {
    if (err) throw err;
        
    arrFiles = arrFiles.filter((mem) => {
        
        return path.extname(mem) === `.${exName}`
    });


    console.log(arrFiles.join('\n'));
});