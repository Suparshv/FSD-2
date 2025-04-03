//write the content of any file and print it on the browser.it will print content of html if the content is written in body tag.
var h = require("http");
var fs=require("fs");
var url=require("url");
var server=h.createServer(
function(req,res)
{var q=url.parse(req.url,true);
    data=fs.readFileSync("."+q.pathname,'utf-8');
    res.writeHead(200,{"content-type":"text/html"});
    res.write(data);
    console.log(data);
    res.write("<h1> hello</h1>")
    res.end();
});
server.listen(6055);