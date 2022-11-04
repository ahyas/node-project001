const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const db = require('./db')
const {getProducts, createProduct, editProduct, updateProduct, deleteProduct} = require('./controllers/ProductsController')
const {getHomePage} = require('./controllers/PagesController')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

//path to frontend
app.get('/', getHomePage)
//path to api
app.get('/api/products', getProducts)

const port = process.env.PORT || 5000

app.listen(port, async ()=>{
    try {
        await db(process.env.MONGO_URI)
        console.log(`App is listening to port ${port}`)
    } catch (error) {
        console.log(error)
    }
})