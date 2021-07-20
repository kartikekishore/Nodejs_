/*const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser= require('body-parser');
const cors=require('cors');
require('dotenv/config');

//MiddleWare
app.use(cors());
app.use(bodyParser.json());

// const postsRoute=require('./routes/pos');
const postsRoute= require('./routes/posts');
app.use('/posts',postsRoute);
// app.use('/user',userRoute);
//ROUTES

app.get('/',(req,res)=>{
    res.send('We are on Home');
})
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=>{
    console.log('Connected To DB!');
});
// mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
//     console.log('connected to DB');}
// );

//HOW DO WE START Listening

app.listen(3000);
*/

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

// middlewares
app.use(cors());
app.use(express.json());

// Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home!!");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB!");
  }
);

// Listen to the server
app.listen(3000, () => console.log("listening on port 3000"));