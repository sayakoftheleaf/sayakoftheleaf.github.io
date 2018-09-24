
// importing a module and assigning it to the const http
// const is used so that you do not have the permission to 
// change existing module components

const http = require('http');

// creating a server to respond to port 8000

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8000);


// creating and exporting your own module
module.exports.testFunction = function () {
    return 'my name is Scott. Michael Scott.';
}