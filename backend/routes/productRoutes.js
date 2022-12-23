const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");
const auth = require('../middlewares/auth');

router.get('/',productController.getAllProducts);
router.post('/',productController.createProduct);
router.get('/:id',productController.getOneProduct);
router.put('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);

module.exports = router;