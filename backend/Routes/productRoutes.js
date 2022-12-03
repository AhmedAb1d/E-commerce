const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productControllers");
const auth = require('../Middlewares/auth');

router.get('/',auth,productController.getAllProducts);
router.post('/',auth,productController.createProduct);
router.get('/:id',auth,productController.getOneProduct);
router.put('/:id',auth,productController.updateProduct);
router.delete('/:id',auth,productController.deleteProduct);

module.exports = router;