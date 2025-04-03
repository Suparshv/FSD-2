//to print multiplication of two number in a url query of http://localhost:5003/test/about?a=20&b=30
var url = require('url')
var http = require('http')
http.createServer((req, res) =>{
    res.writeHead(200, { "content-type": "text/html" });
    var data = url.parse(req.url, true).query
    var data1 = url.parse(req.url, true)
    var multi = data.a * data.b
    x1=JSON.stringify(data)
    x2 = JSON.stringify(data1)
    res.end(x1+"<br>"+x2+"<br>"+multi)
}).listen(5004)