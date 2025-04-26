const express = require("express")
const app = express()
app.use(express.urlencoded())
app.use(express.static(__dirname, { index: "m3.html" }))
app.post("/data", (req, res,next) => {
    res.write("<h1>Welcome " + req.body.n + "</h1>")
    res.write("<h1>Your email id is " + req.body.e + "</h1>")
    next()
})
app.post("/data", (req, res) => {
    if (req.body.s == "on") {
        res.write(`<h3>Thankyou for subscription</h3>`)
        res.write(`<a href='/'>Logout</a>`)
    }
    else {
        res.write(`<h3>You can subscribe to get daily updates</h3>`)
        res.write(`<a href='/subscribe'>subscribe</a>`)
    }
    res.send()
})
app.get("/subscribe", (req, res) => {
    res.set("content-type", "text/html")
    res.write("<h3>Thankou for the subscription</h3>")
    res.write(`<a href='/'>Home</a>`)
    res.send()
})
app.listen(5010)