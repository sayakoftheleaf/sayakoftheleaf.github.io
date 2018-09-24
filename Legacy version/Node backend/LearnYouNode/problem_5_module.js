

// Module contract:
// 1. Export a single function that takes exactly the arguments described
// 2. Call the callback exactly once with an error or some data as described
// 3. Don't change anything else, like global variables or stdout
// 4. Handle all the errors that may occur and pass them to the callback

const fs = require ('fs')
const path = require ('path')

function filterDirs (dirName, extName, callThis) {
  fs.readdir(dirName, (err, data) => {
    if (err) return callThis(err)

    var filteredData = data.filter ((mem) => path.extname(mem) === `.${extName}`)

    callThis(null, filteredData)
  })  

}

module.exports = filterDirs

