const express = require("express")
const app = express()
app.use(express.urlencoded())
app.use(express.static(__dirname, { index: "p2.html" }))
app.post("/admin", (req, res) => {
    if (req.body.n == "admin") {
    res.write("<h1>Welcome " + req.body.n+"</h1>")   
    }
    else {
        res.write("<h1 style='color:red;font-weight:bold'>Please login with admin name!</h1>")
    }
    res.send()
})
app.listen(5005)