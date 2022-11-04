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

module.exports ={getHomePage}