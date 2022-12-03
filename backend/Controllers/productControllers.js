const Product = require("../Models/productSchema");

exports.getAllProducts = ((req, res, next) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

exports.createProduct = ((req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  product.save()
    .then(() => {
      res.status(201).json({
        message: "created successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

exports.getOneProduct = ((req, res) => {
  Product.findOne({
    _id: req.params.id,
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

exports.updateProduct = ((req, res) => {
  const product = new Product({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  Product.updateOne({ _id: req.params.id }, product)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

exports.deleteProduct = ((req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({
        message: "message deleted!",
      })
    )
    .catch((error) =>
      res.status(400).json({
        error: error,
      })
    );
});
