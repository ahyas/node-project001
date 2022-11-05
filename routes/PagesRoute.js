const express = require('express')
const router = express.Router()
const {getHomePage, getBuyPage, getSellPage, getInventoryPage} = require('../controllers/PagesController')

router.get('/', getHomePage).get(getBuyPage).get(getSellPage).get(getInventoryPage)

module.exports = router