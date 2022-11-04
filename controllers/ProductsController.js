const Products = require('../models/Products')

const getProducts = async (req, res) => {
    try {
        const list = await Products.find({})
        res.json({data:list})
    } catch (error) {
        res.json({err:error})
    }
}

const createProduct = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const editProduct = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateProduct = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteProduct = (req, res) => {

}

module.exports = {getProducts, createProduct, editProduct, updateProduct, deleteProduct}