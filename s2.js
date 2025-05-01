const express = require("express")
const app = express()
const es = require("express-session")
app.use(es({ secret: "ABC" ,cookie:{maxAge:8000}}))
app.use(express.static(__dirname, { index: "s2.html" }))
app.get("/savesession", (req, res)=>{
    req.session.uname=req.query.un
    req.session.pass = req.query.pw
    res.redirect("/fetchsession")
})
app.get("/fetchsession", (req, res) => {
    res.send(`<h1>Welcome ${req.session.uname}</h1><br><a href='/deletesession'>Logout</a>`)
})
app.get("/deletesession", (req, res) => {
    req.session.destroy()
    res.redirect("/")
    // res.send(`${req.session.uname}`)
})
app.listen(8000)