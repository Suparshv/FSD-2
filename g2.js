const express = require("express")
const app = express()
app.use(express.static(__dirname, { index: "g2.html" }))
app.get("/process", (req, res) => {
    n = req.query.msg.split(".")
    for (i in n) {
        res.write(n[i]+"\n")
    }
    res.send()
    
})
app.listen(5007)