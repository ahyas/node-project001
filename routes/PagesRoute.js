const express = require('express')
const router = express.Router()
const {getHomePage} = require('../controllers/PagesController')

router.get('/', getHomePage)

module.exports = router