const mongoose = require('mongoose')

const connect = (url) =>{
    try {
        mongoose.connect(url)
        console.log('DB Connected successfuly!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect