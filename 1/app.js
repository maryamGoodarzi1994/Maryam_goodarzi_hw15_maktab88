const express = require("express");
const app = express();
const router = express.Router();
const path = require ("path");
const product = require("./routes/product")
const products = require("./public/products-data.json");

app.set("view engine" , "ejs");
app.set('views', path.join(__dirname, 'views/pages/'));


app.use(express.json())
app.use(express.urlencoded({ extended :true}))
app.use(express.static('public'));

app.use("/product",product)

app.get("/home",(req,res)=>{
    res.render("home", {
        products
    });
})
app.get("/about",(req,res)=>{
    res.render("about",{
        data : "this is about page"
    })
})
app.get("/contact",(req,res)=>{
    res.render("contact",{
        data : "this is contact page"
    })
})


app.listen(8080)