
// Create a program that prints a list of files in a given dir, filtered by 
// the extension of the files. The first argument is the dir name and the 
// 2nd arg is the extension. Print the list of files (one file per line) 
// to the console. You must use async I/O

// Write a module to do most of the work. The module must export a single
// function that takes three arguments: the directory name, the filename
// extension string and the callback function, in that order. The filename
// extension argument must be the same as what was passed to your program.
// Don't turn it into a RegExp or prefix with "." or do anything except pass
// it to your module where you can do what you need to make your filter work.

// The callback function must be called using the idiomatic node(err, data) 
// convention. This convention stipulates that unless there's an error, the first
// argument passed to the callback will be null, and the second will be your data
// In this exercise, the data will be your filtered list of files, as an Array.
// If you receive an error, e.g. from your call to fs.readdir(), the callback
// must be called with the error, and only the error, as the first argument.

// You must not print directly to the console from your module file, only from your
// original program.

// In case of an error bubbling up to your original program file, simply check for it
// and print an informative message to the console.


const myModule = require('./problem_5_module.js')

var dirName = process.argv[2]
//dirName = __dirname
var extName = process.argv[3]
//extName = 'js'

function callThis(err, data) {
  if (err) throw err

  console.log(data.join('\n'))
}

myModule(dirName, extName, callThis)



