const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Models/User");
const Party = require("./Models/Party");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");
const app = express();

const uploadMiddleware = multer({ dest: "uploads/" });


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose.connect( "mongodb+srv://enzenca:j1a5LH2BIBQlOlMx@cluster0.xzcnmre.mongodb.net/")
    .then(()=>{console.log("CONECTADO A MONGODB")})
    .catch((e)=>{ console.log("NO SE CONECTO POR LO SIGUIENTE:"+e)})
  


app.listen(3000, ()=>{
    console.log("Servidor iniciado en puerto " + 3000)
})

// // …or create a new repository on the command line
// echo "# zowll" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:enzocapp/zowll.git
// git push -u origin main

// …or push an existing repository from the command line
// git remote add origin git@github.com:enzocapp/zowll.git
// git branch -M main
// git push -u origin main