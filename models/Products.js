const mongoose = require('mongoose')

const collection = mongoose.Schema({
    sku:String,
    name:String,
    price:Number,
    category:String,
    brand:String
})

module.exports = mongoose.model('products', collection)