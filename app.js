const express =  require('express')
const app = express()
const port = process.env.PORT || 8000
//const path = require("path")
const hbs  = require('hbs')
const bodyParser = require("body-parser")
//const viewpath = path.join(__dirname,"../template/views")

//app.set("view engine","hbs")
//app.set('views',viewpath)
//console.log (viewpath)
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());



app.get("/",((req,res)=>{
    res.render("index.hbs")
    

}))
app.get("/search",((req,res)=>{
    res.render("search.hbs")
    

}))

// app.get("*",(req,res)=>{
//     res.render("404",{
//         errorMsg:"Ooos! Page Not Found"
//     })
// })

app.listen(port,(()=>{
    console.log(`"http://localhost:${port}"`)
}))