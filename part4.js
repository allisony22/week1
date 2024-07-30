//import the modules 
//create the server 
// listen in a port 
// create the files 
// serve the respective file based on the request path 
//read the file content using fs module 
// end the response 

//import the modules 
let http = require('http');
let fs = require ('fs');

//define the path to view directory 
const VIEWS_PATH = "./views/"

//jold the response message 
let msg = "";

//create a http server and listen  to a port 
http.createServer(function(request,response){
    //initialise the fla to control whether to serve a file or respond with a message

    let flag = true;

    if (request.url  !== "/favicon.ico"){
        let baseURL = "http://" + request.headers.host + "/";
        let url = new URL (request.url, baseURL);

        //determine the file or message nased on the requested url
        switch (url.pathname){
            case "/":
                fileName = VIEWS_PATH + "index.html"
                break;
                //second scenario 
                case "/whichweel/":
                    flag = false; //set flag = false to avoid serving files 
                    //extract the query parameters 
                    q = url.searchParams; //http://localhost:8000?d=dd
                    //calculate the current week since the first day of semester two 
                    weekNo = getDaysDiff(q.get('d'), q.get('m'), q.get('y'));
                    //determine the message based on the calculated week number 
                    if(weekNo<0){
                        msg = "Wrong Date!!! First day in sem 2 is the 25th Jul"

                    }else if(weekNo>=15){
                        msg = "Wrong Date!!! Last date in sem 2 is 21st Oct"

                    }else{
                        msg = "We are in week" + weekNo
                    }
                    response.end("<h1>" + msg+"</h1>")
                    break;
            case "/assessments":
                fileName = VIEWS_PATH + "assessment.html"
                break;
            case "/topics":
                fileName = VIEWS_PATH + "topic.html"
                break;
            default:
                fileName = VIEWS_PATH + "404.html"
                break;
        }
        //if the flag is still true, read the serve the files 
        fs.readFile(fileName, function(error,content){
            response.writeHead(200,{
                "Content-Type": "text/html"
            })
            response.end(content);

        })
    }
}).listen(8000);

function getDaysDiff(d, m, y) {
    let returnValue = -1;
    let currentDay = new Date();
    currentDay.setDate(parseInt(d));
    currentDay.setMonth(parseInt(m) - 1); // months start from 0
    currentDay.setYear(parseInt(y));

    let firstDay = new Date(2023,6,24); // first day in semester 2

    if (currentDay >= firstDay) {
        var diffDays = parseInt((currentDay - firstDay) / (1000 * 60 * 60 * 24)); //gives day difference 
        returnValue = (Math.floor(diffDays / 7) + 1);
    }
    return (returnValue);
}