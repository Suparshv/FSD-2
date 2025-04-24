const express = require("express")
const app = express()
app.use(express.static(__dirname, { index: "g3.html" }))
app.get("/calc", (req, res) => {
    var n1=req.query.n1
    var n2=req.query.n2
    var a = req.query.formula
    if (n1==n2=="") {
        res.write("select number")
    }
    else {
        if (a == "add") {
            res.write(n1+n2)
        }
        else if (a == "sub") {
            res.write(n1-n2)
        }
        else if (a == "mul") {
            res.write(n1*n2)
        }
        else if (a == "div") {
            res.write(n1/n2)
        }
        else {
            res.write("select formula")
        } 
    }
    res.send()
})
app.listen(5008)