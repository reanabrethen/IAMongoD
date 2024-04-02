const Product = require('../model/Product')

async function createProduct(body){
    try {
        const productCreated = new Product ({
            productName : body.productName
        })
        return await productCreated.save()
    } catch (error) {
        return error
    }
}

async function getAllProducts(){
    try {
        const foundAllProducts = await Product.find({})
        return foundAllProducts
    } catch (error) {
        return error
    }
}

async function getProductByID(id){
    try {
        return await Product.find({_id:id})
    } catch (error) {
        
    }
}

async function updateProductByID(id, body){
    try {
        return await Product.findByIdAndUpdate({_id:id}, body, {new:true})
    } catch (error) {
        return error
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductByID,
    updateProductByID
}