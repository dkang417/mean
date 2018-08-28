const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

// eph9YlbbFBIRZXWu
const app = express();



mongoose.connect("mongodb+srv://dkang417:eph9YlbbFBIRZXWu@cluster0-r3dvt.mongodb.net/node-angular?retryWrites=true")
  .then(() => {
    console.log('connected to the database!!!');
  })
  .catch(() => {
    console.log('connection failed!!!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
