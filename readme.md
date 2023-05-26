## Index (GET)= show me everything ##
New(GET) = Give me a form so I can create a thing
Create(POST)= Create a thing using this form a filled out
Show(GET) = show me a thing with this id
Edit(GET)= Give me a prefilled form so I can change something on the thing
Update(PUT)= Update the thing with this changed form
Delete(DELETE)= Get rid of the thing with this id

## I-N-D-U-C-E-S
Be sure to remember this acronym to keep your routes in working order!
Routes...

# I - Index - Show all the things!
# N- New -  An empty form for a new thing
# D - Delete - Get rid of this particular thing!
# U - Update: Update this specific thing with this updated form
# C - Create - Make a new thing with this filled out form
# E - Edit - A prefilled form to update a specific thing
# S - Show - Show me this one thing!

## Meddleware
middleware configures things BEFORE routes happen. It's the middle man between the user sending a request, and getting a response

// Add dotenv
// Imports or Dependencies
// Mongoose info
// Middleware
// Data
// Routes...
// Listen

Routes
// Index ----------- GET -------- /things
// New ------------- GET -------- /things/new
// DELETE ---------- Destroy ---- /things/:id
// Update ---------- PUT -------- /things/:id
// Create ---------- POST ------- /things	 
// Edit------------- GET -------- /things/:id/edit
// Show ------------ GET -------- /things/:id


touch server.js

npm init -y

npm i express

npm install jsx-view-engine react react-dom dotenv --save 

npm i -g nodemon (one time install)

npm i mongoose@6.11.1

npm i method-override
=============================================== Week 13 =======================================================



// Templet 

// Add dotenv
require("dotenv").config();
// Imports or Dependencies
const express = require("express");
const app = express();
// Mongoose info
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
// Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
// Data

// Routes...
// Index ----------- GET -------- /things
// New ------------- GET -------- /things/new
// DELETE ---------- Destroy ---- /things/:id
// Update ---------- PUT -------- /things/:id
// Create ---------- POST ------- /things
// Edit------------- GET -------- /things/:id/edit
// Show ------------ GET -------- /things/:id

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Port: ${process.env.PORT}`);
});
