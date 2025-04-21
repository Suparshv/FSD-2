const express = require("express")
const app = express()
var s = { d: [{ "name": "A", "age": 20 }, { "name": "C", "age": 18 }, { "name": "Z", "age": 30 }] }
app.get("/", (req, res) => {
    res.set("content-type", "text/html")
    res.write(`<table border='1px  solid'><tr><td>Name</td><td>Age</td></tr><tr><td>${s.d[0].name}</td><td>${s.d[0].age}</td></tr><tr><td>${s.d[1].name}</td><td>${s.d[1].age}</td></tr><tr><td>${s.d[2].name}</td><td>${s.d[2].age}</td></tr></table>`)
    res.send()
})
app.get("/sort", (req, res) => {
    var sort = s.d.sort((a, b) => b.age - a.age)
    console.log(sort)
    for (j = 0; j < sort.length; j++){
        res.write("<p>"+sort[j].name+"="+sort[j].age+"</p>")
    }
    
    res.send()
})
app.listen(5011)