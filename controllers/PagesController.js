const Categories = require('../models/Category')
const Brands = require('../models/Brands')

const getHomePage = (req, res) => {
    try {
            let data = {
                title:'Home',
                content:'Welcome to the homepage'
            }
            res.render('index', {data:data})
    } catch (error) {
        console.log(error)
    }
}

const getBuyPage = (req, res) =>{
    try {
        let data = {
            title:'Buy',
        }
        res.render('transactions/buy', {data:data})
    } catch (error) {
        console.log(error)
    }
}

const getSellPage = (req, res) => {
    try {
        let data = {
            title:'Sell'
        }
        res.render('transactions/sell', {data:data})
    } catch (error) {
        console.log(error)
    }
}

const getInventoryPage = async (req, res) =>{
    try {
        const data = {
            title:'Inventory'
        }
        const brands = await Brands.find()
        const categories = await Categories.find()
        res.render('inventory', {data:data, categories:categories, brands:brands})
    } catch (error) {
        consnole.log(error)
    }
}

module.exports ={getHomePage, getBuyPage, getSellPage, getInventoryPage}