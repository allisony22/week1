//Import the in-built module http from Node.js
let http = require('http');

//create a HTTP server 
//createServer method takes a callback function with two parameters 
//what is callback fucnction? A function that is passed as an argument to another function, and executed after some event or a certain task is completed
http.createServer(function(request,response){
    console.log(request.url);

//send the response with a dynamic message in body of the response
let random = Math.random(Math.random()*20);

//initialise a message string with HTML tags
let msg = '<h1><ol>'


//append list of items to the message string based on the random number 
for(let i =0; i<random; i++){
    msg += `<li>item-${i}</li>`

    //msg += '<li> item-' + i + '</li>'

}
response.writeHead(200);

response.write(msg);

//end the response 
response.end();
}).listen(8000);
// check the status of server 
console.log('Server is running');
