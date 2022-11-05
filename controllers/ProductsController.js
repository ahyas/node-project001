const Products = require('../models/Products')

const getProducts = async (req, res) => {
    try {
        await Products.aggregate([
            //converting string value to objevt id
            {
                $addFields:{
                    'id_category':{
                        $toObjectId:'$category'
                    }
                }
            },
            {
                $addFields:{
                    'id_brand':{
                        $toObjectId:'$brand'
                    }
                }
            },
            //do a multiplication on 2 fields to find subtotal
            {
                $addFields:{
                    'subtotal':{
                        $multiply:['$stock','$price']
                    }
                }
            },
            //join with table categories
            {
                $lookup:{
                    from:'categories',
                    localField:'id_category',
                    foreignField:'_id',
                    as:'category_name'
                }
            },
            //join with table brands
            {
                $lookup:{
                    from:'brands',
                    localField:'id_brand',
                    foreignField:'_id',
                    as:'brand_name'
                }
            },
            //remove array
            {
                $unwind:'$brand_name'
            },
            {
                $unwind:'$category_name'
            },
            //select fields to show
            {
                $project:{
                    '_id':1,
                    'sku':1,
                    'name':1,
                    'stock':1,
                    'price':1,
                    'subtotal':1,
                    'category_name':1,
                    'brand_name':1
                }
            }

        ], (err, data)=>{
            res.json({data:data})
        })
    } catch (error) {
        res.json({err:error})
    }
}

const createProduct = async (req, res) => {
    try {
        await Products.create(req.body)
        res.json('Success')
    } catch (error) {
        console.log(error)
    }
}

const editProduct = async (req, res) => {
    try {
        let {id} = req.params
        let data = await Products.findById(id)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}

const updateProduct = async (req, res) => {
    try {
        let {id} = req.params
        console.log(req.body)
        //await Products.findByIdAndUpdate(id, req.body, {new:true})
        await Products.findOneAndUpdate({_id:id},{$set:req.body}, {new:true})
        res.json('Success')
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (req, res) => {
    try {
        let {id} = req.params
        await Products.findByIdAndDelete(id)
        res.json('Success')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getProducts, createProduct, editProduct, updateProduct, deleteProduct}