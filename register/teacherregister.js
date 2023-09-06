import { teacher } from "../utils/userschema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const teacherregister = async (req, res) => {
    const { email, password, secretkey } = req.body;
    if (secretkey == process.env.teachersecretkey) {
        const a = await teacher.findOne({ email });
        if (!a) {
            const hashedp=await bcrypt.hash(password,10)
            const data = await teacher.create({ email, password:hashedp });
            const codedid=jwt.sign({_id:data._id},"abcdefghijklmnop")
            res.cookie("token", codedid, {
                httpOnly: true,
                expires: new Date(Date.now() + 20 * 60 * 1000)
            })
            res.json({
                success: true,
                message: "teacher registered successfully"
            })
        }
        else{

            res.json({
                success: false,
                message: "teacher with this emailid already exists"
            })
        }
    }
    else {
        res.json({
            success: false,
            message: "incorrect secret key"
        })
    }
}