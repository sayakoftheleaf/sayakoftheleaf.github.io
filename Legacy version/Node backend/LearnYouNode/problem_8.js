// You will be provided with 3 urls as the first 3 command
// line arguments. 

// You must collect the complete content provided to you by each
// of the URLs and print it to the console (stdout). You don't
// need to print out the length, just the data as a String; one 
// line per URL. The catch is that you must print them out in the 
// same order as the URLs are provided to you as command line arguments.

const http = require('http')
const bl = require('bl')

var dataArr = ['', '', '']

http.get(process.argv[2], response => {

  let tempBuffer = new bl
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err)
    }
    dataArr[0] += data.toString()

    http.get(process.argv[3], response => {

      let tempBuffer = new bl
      response.pipe(bl((err, data) => {
        if (err) {
          return console.error(err)
        }
        dataArr[1] += data.toString()

        http.get(process.argv[4], response => {

          let tempBuffer = new bl
          response.pipe(bl((err, data) => {
            if (err) {
              return console.error(err)
            }
            dataArr[2] += data.toString()

            dataArr.map(x => console.log(x))
          }))
        })
      }))
    })

  }))
})

