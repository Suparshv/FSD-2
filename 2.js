//2nd method where frontend folder has html,css file and js file is outside frontend folder
const express = require("express")
const app = express()
app.use(express.static("Frontend", { index: '2.html' }))
app.listen(5001)