// http module
var http = require("http")
var server = http.createServer((req, res) =>{
    res.writeHead(200, { "content-type": "text/html" });
    res.write("url path fetched")
    res.end("<h1>"+req.url+"</h1>")
}).listen(5003)