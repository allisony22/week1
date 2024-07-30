//Import the in-built module http from Node.js
let http = require('http');

//create a HTTP server 
//createServer method takes a callback function with two parameters 
//what is callback fucnction? A function that is passed as an argument to another function, and executed after some event or a certain task is completed
http.createServer(function(request,response){
    console.log(request.url);

//respond with status code: 201: created, 302: found, 404: not found: 502: bad gateway
response.writeHead(200);
//send the response with a message in body of the response 
response.write('This is from your first server!');

//end the response 
response.end();
}).listen(8000);
// check the status of server 
console.log('Server is running');

