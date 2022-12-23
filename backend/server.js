const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3200;


mongoose
  .connect("mongodb+srv://Ahmed:password1234@course.5asvuvx.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors())

app.use(bodyParser.json());

app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
