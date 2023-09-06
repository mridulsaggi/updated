import { student } from "../utils/userschema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const studentlogin=async(req,res)=>{
    const{email,password}=req.body;
    const a=await student.findOne({email});
    if(a){
        const match=await bcrypt.compare(password,a.password);
        if(match){
            const id=jwt.sign({_id:a._id},"abcdefghijklmnop")
            res.cookie("token",id,{
                httpOnly:true,
                expires:new Date(Date.now()+20*1000*60)
            }).json({
                success:true,
                message:"student logedin successfully"
            })
        }
        else{
            res.json({
                success:false,
                message:"invalid password"
            })
        }
    }
    else{

        res.json({
            success:false,
            message:"user not registered"
        })
    }
}