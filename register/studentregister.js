import { student } from "../utils/userschema.js";
import bcrypt from "bcrypt"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
export const studentregister = async(req, res) => {
    const{name,email,password}=req.body;
    const a = await student.findOne({ email });
    if (a) {
        res.json({
            success: false,
            message: "student with this emailid already exists"
        })
    }
    else{

        const hashedpassword =await bcrypt.hash(password, 10)
    
        const data = await student.create({ name,email, password: hashedpassword });
        const codedid=jwt.sign({_id:data._id},"abcdefghijklmnop")
        res.cookie("token",codedid,{
            httpOnly:true,
            expires:new Date(Date.now()+20*60*1000)
        })
        res.json({
            success: true,
            message: "student registered successfully"
        })
    }
}