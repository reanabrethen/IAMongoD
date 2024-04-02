const express = require('express')
const router = express.Router()

const {createProduct, getAllProducts, getProductByID, updateProductByID} = require('./controller/productController')

router.post('/create-product', async (req, res)=>{
    try {
        let productCreated = await createProduct(req.body)
        res.json({message: "Successfully created product", productCreated})
    } catch (error) {
        res.json({message: "error", error: error.message})
    }
})

router.get('/get-all-products', async (req, res)=>{
    try {
        let foundAllProducts = await getAllProducts()
        res.json({message: "Successfully found all products", foundAllProducts})
    } catch (error) {
        res.json({message: "Failed to retrieve all products", error: error.message})
    }
})

router.get('/get-product-by-id/:id', async (req, res)=>{
    try {
        let idOfProduct = await getProductByID(req.params.id)
        res.json({message: "Successfully found product", idOfProduct})
    } catch (error) {
        res.json({message: "error", error: error.message})
    }
})

router.put('/update-product/:id', async (req, res)=>{
    try {
        let productUpdate = await updateProductByID(req.params.id, req.body)
        res.json({message: "Successfullly updated", productUpdate})
    } catch (error) {
        res.json({message: "Failed to update", error: error.message})
    }
})
module.exports = router