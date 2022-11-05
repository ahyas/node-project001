const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const db = require('./db')
const {getProducts, createProduct, editProduct, updateProduct, deleteProduct} = require('./controllers/ProductsController')
const {getHomePage, getBuyPage, getSellPage, getInventoryPage} = require('./controllers/PagesController')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', [
    path.join(__dirname, 'views'), 
    path.join(__dirname, 'views/layouts')
])

//path to frontend
app.get('/', getHomePage)
app.get('/home', getHomePage)
app.get('/transaction/buy', getBuyPage)
app.get('/transaction/sell', getSellPage)
app.get('/inventory', getInventoryPage)

//path to api
app.get('/api/products', getProducts)
app.post('/api/products', createProduct)
app.put('/api/products/:id', editProduct)
app.patch('/api/products/:id', updateProduct)
app.delete('/api/products/:id', deleteProduct)

const port = process.env.PORT || 5000

app.listen(port, async ()=>{
    try {
        await db(process.env.MONGO_URI)
        console.log(`App is listening to port ${port}`)
    } catch (error) {
        console.log(error)
    }
})