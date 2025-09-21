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



app.listen(PORT);