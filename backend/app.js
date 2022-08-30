const bodyParser = require('body-parser');
const { Console } = require('console');
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const mangoose = require('mongoose');
const postRoutes = require('./routes/posts')


// kash
// aNJsoKwYhAwXRCui

mongoose.connect("mongodb+srv://kash:aNJsoKwYhAwXRCui@cluster0.k4idf.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
      console.log('Connected to database!')
  })
  .catch(() =>{
    console.log('Connection failed!')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin', '*'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/posts', postRoutes);

module.exports = app;

