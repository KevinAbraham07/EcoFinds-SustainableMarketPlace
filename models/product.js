import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    seller : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    productName : {
        type : String,
        required : true
    },
    productDescription : {
        type : String
    },
    brand : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    condition : {
        type : String,
        enum : ['new', 'good', 'used', 'old'],
        required : true
    },
    demand : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    }

},{ timestamps: true });

export default mongoose.model("Product", productSchema);