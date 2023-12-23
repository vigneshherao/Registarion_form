const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user.js");
const ejsMate = require('ejs-mate')


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', ejsMate);

mongoose
  .connect("mongodb://127.0.0.1:27017/BharatIntern")
  .then(() => console.log("Connected to database!"))
  .catch((err) => {
    console.log("error in database");
  });



app.listen(port, (req, res) => {
  console.log(`${port} is running sucessfully`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.get("/adduser",async (req,res)=>{
    let newUser = new User({
        username:"vignesh",
        email:"vigneshfornavy@gmail.com",
        password:"123"
    });

    let userAdded = await newUser.save();

    console.log(userAdded);
})


app.post("/register", (req, res) => {
  let { username, email, password } = req.body;
});

//for the login page

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
});


//landing page

app.get("/homepage",(req,res)=>{
    res.render("homepage.ejs");
})