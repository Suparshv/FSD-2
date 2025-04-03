// http module
var http = require("http")
var server = http.createServer((req, res) =>{
    res.writeHead(200, { "content-type": "text/html" });//text/plain
    res.write("<h1 style='color:red'>Welcome</h1>")
    res.write("Testing 123")
    res.end("<h2>Hello<h2>")
    //res.write("ended")//'ERR_STREAM_WRITE_AFTER_END'
})
server.listen(5003,()=>console.log("server started"))