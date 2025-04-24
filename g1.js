const express = require("express")
const app = express()
app.use(express.static(__dirname, { index: "g1.html" }))
app.get("/process", (req, res) => {
    console.log(req.query)
    res.send(`<h1>Welcome ${req.query.firstname} ${req.query.lastname}`)
})
app.listen(5006)