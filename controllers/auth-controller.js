import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const registerUser = async(req , res)=>{
    try{
        const {username, email, password, role}= req.body; //collect user details
        const checkExistingUser = await User.findOne({$or : [{username},{email}]});
        if(checkExistingUser){
            return res.status(404).json({
                success : false,
                message : "User already Exists"
            })
        }
        else{
            const salt = await bcrypt.genSalt(5);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                username,
                email,
                password : hashedPassword,
                role : role || 'user'
            });
            await newUser.save();

            if(newUser){
                return res.status(201).json({
                    success : true,
                    message : "User Registered Successfully"
                })
            }
            else{
                return res.status(404).json({
                    success : false,
                    message : "Failed to register User"
                })
            }
        }

    }
    catch(error){
        console.error(`Error Detected : ${error}`);
        return res.status(404).json({
            success : false,
            message : "Some error occurred"
        })
    }
}

const loginUser = async(req , res)=>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user){
            return res.status(404).json({
                success : false,
                message : "Invalid Credentials"
            })
        }
        else{
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if(!isPasswordMatch){
                return res.status(404).json({
                    success : false,
                    message : "Invalid Credentials"
                })
            }
            else{
                const accessToken = jwt.sign({
                    userID : user._id,
                    username : user.username,
                    role : user.role
                }, process.env.JWT_SECRET_KEY, {
                    expiresIn : "15m"
                });

                return res.status(201).json({
                    success : true,
                    message : "logged in successfully",
                    accessToken
                });
            }
        }
    }
    catch(error){
        console.error(`Error Detected : ${error}`);
        return res.status().json({
            success : false,
            message : "Some error occurred"
        })
    }
}

export default {loginUser,registerUser};