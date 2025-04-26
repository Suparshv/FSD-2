const express = require("express")
const app = express()
const fun1 = (req, res, next) => {
    res.set("content-type", "text/html")
    console.log("function1")
    res.write("<h1>Function 1 executed</h1>")
    next()
}
const fun2 = (req, res, next) => {
    console.log("function2")
    res.write("<h3>Function 2 executed</h3>")
    next()
}
app.use("/test", fun1, fun2)
app.get("/test", (req, res) => {
    res.write("Final execution")
    res.send()
})
app.listen(7001)