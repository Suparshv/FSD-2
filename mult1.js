const express = require("express")
const app = express()
const multer = require("multer")
app.use(express.urlencoded())
app.set("view engine","pug")
app.get('/', (req, res) => {
    res.render(__dirname+"/mult1")
})
var store = multer.diskStorage({ destination: 'LJU' ,filename:function(req,file,cb){cb(null,Date.now()+"-"+file.originalname)}})
var upload = multer({ storage: store })
app.post("/data", upload.single("mypic"), (req, res) => {
    const file = req.file
    console.log(file)
    if (file) {
        res.send(`<h1>${file.originalname} has been uploaded in ${file.destination}</h1>`)
    }
})
app.listen(7002)