//show the file content using HTTP server 
//create the server 
//Listen in a port 
// create the files 
// serve the respective file based on the request path 
//read the file content using fs module 
// end the response 

let http = require('http');

//inbuilt module to handle file operations 

let fs = require('fs');

//create a server and listen to a port 
http.createServer(function(request,response){
    //initialise the filePath variable to store the path of the file to serve 
    let filePath =  ""
    // determine the file to server based on the request URL 
    if(request.url === '/'){
       filePath = "./index.html"
    }else if (request.url === "/topic"){
        filePAth = "./topic.html"
    }else {
        filePath = "./404.html"
    }

    //read the file from the fileSystem 
    fs.readFile(filePath, function(error, content){
        //set the header with the status 200 
        response.writeHead(200, {
            "Content-Type": "text/html",
        })
        response.end(content, "utf-8");
    });
}).listen(8000);