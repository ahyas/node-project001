const mongoose = require('mongoose')

const collection = mongoose.Schema({
    name:String
})

module.exports = mongoose.model('brands', collection)