const express = require("express");
const session = require("express-session");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/",function(req,res){
   res.render("home");
});

app.listen(PORT);