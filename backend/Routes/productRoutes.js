const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productControllers");

router.get('/',productController.getAllProducts);
router.post('/',productController.createProduct);
router.get('/:id',productController.getOneProduct);
router.put('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);

module.exports = router;