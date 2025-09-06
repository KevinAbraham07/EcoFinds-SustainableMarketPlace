import Cart from "../models/cart.js";

const addToCart  = async(req,res)=>{
    try{
        const userId = req.user._id;
        const {productId} = req.body;

        let cart = await Cart.findOne({user: userId});

        if(!cart){
            cart = new cart({
                user : userId,
                items: [{product: productId, quantity: 1}]
            })
        }
        else{
            const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
            if(itemIndex > -1){
                cart.items[itemIndex].quantity += 1;
            }
            else{
                cart.items.push({product: productId, quantity: 1});
            }
        }
        await cart.save();
        res.status(200).json({
            success: true,
            message : `Item added to cart`,
            cart 
        });

    }
    catch(error){
        console.error(`Error Detected - ${error}`);
    }
}


const removeFromCart = async(req,res)=>{
    try{
        const userId = req.user._id;
        const {productId} = req.params;
        const cart = await Cart.findOne({user: userId});
        if(!cart){
            return res.status(404).json({
                success: false,
                message: "Cart not found" 
            });
        }
        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();
        res.status(200).json({
            success: true,
            message : `Item removed successfully`,
            cart 
        });        

    }
    catch(error){
        console.error(`Error Detected - ${error}`);
    }
}


export default {addToCart,removeFromCart};