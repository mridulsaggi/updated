import jwt from "jsonwebtoken";
import { student, teacher } from "./utils/userschema.js";
export const isauth = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decodedid = jwt.decode(token._id, "abcdefghijklmnop");
        const abc = await teacher.findOne({ id: decodedid })
        if (abc) {
            console.log("logedin as a teacher")
            req.data = abc;
            next();
        }
        else {
            const efg = await student.findOne({ id: decodedid });
            console.log("logedin as a student")
            req.data = efg;
            next();
        }
    }
    else {
        res.json({
            success: "false",
            message: "please login first"
        })
    }
}