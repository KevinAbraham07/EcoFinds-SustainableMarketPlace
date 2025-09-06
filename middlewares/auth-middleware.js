import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = async (req, res, next)=>{
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                success: false,
                message: "Token is not valid",
            });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user){
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }
        next();
    }
    catch(error){
        console.error(`Some error occurred: ${error}`);
        return res.status(401).json({
            success: false,
            message: "Token is not valid",
            error: error.message
        });
    }
}


export default authMiddleware;
 