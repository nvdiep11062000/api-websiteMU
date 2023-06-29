const express = require("express")
const router = express.Router()
const Product = require("../Model/productModel")
//GET ALL PRODUCTS
router.get("/", async (req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//GET A PRODUCT
router.get("/:id", async (req,res)=>{
    try {
        const {id} = req.params
        if(!id) {
            return res.status(500).json({message:`cannot find any product with ID ${id}`})
        }
        const product = await Product.findById(id)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//UPDATE A PRODUCT
router.put("/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product) {
            return res.status(500).json({message:`cannot find any product with ID ${id}`})
        }
        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//DELETE A PRODUCT
router.delete("/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product) {
            return res.status(500).json({message:`cannot find any product with ID ${id}`})
        }
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//SAVE A PRODUCT
router.post("/", async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

module.exports = router