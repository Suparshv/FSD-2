//1.1st method where html,css,js files are in main folder.
const express = require("express")
const app = express()
app.use(express.static(__dirname))
app.listen(5000)