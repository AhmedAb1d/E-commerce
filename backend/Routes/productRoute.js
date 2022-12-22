const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')


router.route('/products')
.post( productCtrl.createProduct)
.get(productCtrl.getProducts)






module.exports = router