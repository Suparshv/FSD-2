const express = require("express")
const app = express()
const multer = require("multer")
app.use(express.urlencoded())
app.set("view engine","pug")
app.get('/', (req, res) => {
    res.render(__dirname+"/mult2")
})
var store = multer.diskStorage({ destination: 'LJU' ,filename:function(req,file,cb){cb(null,Date.now()+"-"+file.originalname)}})
var upload = multer({ storage: store ,limits:{fileSize:1024}})//1024*1024 is 1gb and 1024 is 1mb
app.post("/data", upload.array("mypic",5), (req, res) => {//mypic,5 will allow only 5 files to upload
    const file = req.files
    console.log(file)
    if (file) {
        for (f of file) {
            res.write(`<h1>${f.originalname} has been uploaded in ${f.destination}</h1>`)
        }res.send()
    }
})
app.listen(7003)