const express = require("express")
const app = express()

let data = require("./json/data.json")
console.log(data)

app.get("/api/getdata", (req, res, next) => {
    res.send(data)
})
app.get("/api/api/search",(req,res,next)=>{
    console.log(req.query)
})
app.get("/api/gettype", (req, res, next) => {
    console.log(req.query.type)
    // req.body
    if (req.query.type === "all") {
        res.send(data)

    } else if (req.query.type === "buyer") {
        res.send(
            data.filter(item => {
                return item.type===req.query.type 
            })
        )

    }else if (req.query.type === "like") {
        res.send(
            data.filter(item => {
                return item.type===req.query.type 
            })
        )

    }else if (req.query.type === "ok") {
        res.send(
            data.filter(item => {
                return item.type===req.query.type 
            })
        )

    }
})


app.listen(8080, () => {
    console.log("port created successfully")
})