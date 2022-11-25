const express = require('express')
const { getAllProducts, getOneProduct, deleteProduct, updateOrAddProduct } = require('../Controllers/productControllers')
const productRoutes = express.Router()

productRoutes.get('/', getAllProducts)

productRoutes.get('/:product_id', getOneProduct)


/**
 * updating the status of instore to false
 * since all products gets items in store the deleted(updated) 
 * item wouldnt appear
 */
productRoutes.delete('/:product_id', deleteProduct)
productRoutes.post('/', updateOrAddProduct)
productRoutes.put('/', updateOrAddProduct)



module.exports = productRoutes;