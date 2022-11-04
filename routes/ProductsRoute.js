const express = require('express')
const router = express.Router()
const {getProducts, createProduct, editProduct, updateProduct, deleteProduct} = require('../controllers/ProductsController')

router.get('/', getProducts)
router.post('/', createProduct)
router.put('/:id', editProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router