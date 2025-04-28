const express = require("express")
const app = express()
const session = require("express-session")
app.use(session({ resave: false, saveUninitialized: false, secret: "LJU123" }))
app.get("/", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`<h1 style='color:blue;'>You have visited ${req.session.page_views} times</h1>`) 
    }
    else {
        req.session.page_views = 1
        res.send("<h1 style='color:green;'>Thankyou for visiting</h1>")
    }
    
})
app.listen(8001)