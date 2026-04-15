const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);

mongoose.connect('mongodb+srv://cuongnqgcs230230_db_user:Cuong29072005@cluster0.nfug7ix.mongodb.net/?appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(port, () => {
      console.log(`todo list RESTful API server started on: ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });