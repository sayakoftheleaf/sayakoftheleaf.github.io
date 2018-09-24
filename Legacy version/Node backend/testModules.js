
// importing a custom made module - relative path

const newMod = require('./test_app');

// http module allows Node to transfer data over http
const http = require('http');

// the function will be executed whenever some one accesses port 8080
http.createServer(function(req, res){

    // HTTP header 
    // the first argument is the status code
    // 200 for OK
    // second argument is the object containing the response headers
    res.writeHead(200, {'Content-Type' : 'text/html'});
    
    // write a response to the client
    res.write(newMod.testFunction());
    
    // end the response
    res.end();
}).listen(8080);


// the function passed on to createserver has a req argument 
// that represents the request from the client, as an object
// (http.IncomingMessage object)

// The object has a property called url, that holds the part of the
// url that comes after domain name
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(`${req.url} Waka Waka`);
    res.end(`Bitch please. ${newMod.testFunction()}`);
}).listen(4080);

