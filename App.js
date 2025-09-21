const express = require("express");
const session = require("express-session");
const connectDB = require("./config/db");
connectDB();
// const routes = require('./routes/userRoutes')
const fs = require('fs');
const pdf = require('pdf-parse');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
// app.use('/', routes);

app.get('/home',(req,res)=>{
res.render('index');
})
app.get('/signin',(req,res)=>{
res.render('signin');
})
app.get('/recommendations',(req,res)=>{
    res.render('/recommendations');
})
app.get('/rec/showComp',(req,res)=>{
    res.render('comparison');
    
})
app.post('/selecteCarrier',(req,res)=>{

})
app.get('/progress',(req,res)=>{
    res.render('progress');
})
app.get('prep',(req,res)=>{
    res.render('prepPlan');
})
app.get('/profile', (req,res)=>{
    res.render('profile');
})




app.listen(PORT);