const cp = require('cookie-parser')
const express = require("express")
const app = express()
app.use(cp())
app.use(express.static(__dirname, { index: "c3.html" }))
app.get("/feedback", (req, res) => {
    const { f, em, m, r } = req.query//if post method then write req.body
    const feedback ={f,em,m,r}
    res.cookie("feedback", feedback, { maxAge: 10000 })
    res.send("<h2>Thankyou</h2><br><a href='/details'>Show details</a>")
})
app.get("/details", (req, res) => {
    var fb = req.cookies.feedback
    if (fb) {
        res.send(`<h2>Name:${fb.f}</br>Email:${fb.em}</br>Message:${fb.m}</br>Rating:${fb.r}</br></h2><a href='/'>Logout</a>`)
    }
    else {
        res.send("<h2>No feedback avilable</h2>")
    }
})
app.listen(7008)