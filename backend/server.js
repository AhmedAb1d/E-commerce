const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const app = express();
const port = 3200;

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.error(error);
  });

app.use(bodyParser.json())

app.use('/users',userRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
