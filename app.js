
import body_parser from "body-parser";
import express from "express";



var app = express();
var bodyParser = body_parser();


app.use(express.urlencoded({extended : true}));




app.get("/", function (req, res) {
    res.sendFile("/home/farid/express/index.html")

})

app.get("/calc", function (req, res) {
    res.sendFile("/home/farid/express/calc.html")


})

app.post("/calc", (req, res) => {
    
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1 * n2
    res.send(`<h1>the multiply result is ${result}</h1>`)
})

app.listen(3000, () => {
    console.log ("web start in port 3000")
})