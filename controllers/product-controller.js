import Product from "../models/product.js";

const getAllProducts = async (req,res)=>{
    try{
        const allProducts = await Product.find({});
        if(allProducts){
            res.status(200).json({
                success : true,
                message : `Products found`,
                data : allProducts
            })
        }
        else{
            res.status(404).json({
                success : false,
                message : `Product not found`
            })
        }
    }
    catch(error){
        console.error(`Error Detected - ${error}`);
    }
}

const getProductById = async (req,res)=>{
    try{
        const getId=req.params.id;
        const productById=await Product.findById(getId);
        if(productById){
            res.status(200).json({
                success : true,
                message : `Product found`,
                data : productById
            })
        }
        else{
            res.status(404).json({
                success : false,
                message : `Product not found`
            })
        }
    }
    catch(error){
        console.error(`Error Detected - ${error}`);
    }

}

const addProducts = async (req,res)=>{
    try{
        const newProduct=req.body;
        const addProduct= await Product.create(newProduct);
        if(addProduct){
            res.status(200).json({
                success : true,
                message : `New Product added`,
                data : addProduct
            })
        }
        else{
            res.status(404).json({
                success : false,
                message :'Product not added'
            })
        }
    }
    catch(error){
        console.error(`Error detected : ${error}`);
    }
}

const updateProducts = async(req,res)=>{
    try{
        const getProductId=req.params.id;
        const updateData = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(getProductId, updateData, {new : true});
        if (updatedProduct){
            res.status(200).json({
                success : true,
                message : `Product Updated`,
                data : updatedProduct
            })
        }
        else{
            res.status(404).json({
                success : false,
                message : `Product not updated`
            })
        }
    }
    catch(error){
        console.error(`Error detected : ${error}`);
    }

}

const deleteProducts = async(req,res)=>{
    try{
        const getDeleteId = req.params.id;
        const deletedProduct =await Product.findByIdAndDelete(getDeleteId);
        if (deletedProduct){
            res.status(200).json({
                success : true,
                message : `Product Deleted`,
                data : deletedProduct
            })
        }
        else{
            res.status(404).json({
                success : false,
                message : `Product not found`
            })
        }
    }
    catch(error){
        console.error(`Error detected - ${error}`);
    }

}

export default {getAllProducts, getProductById, addProducts, updateProducts, deleteProducts};