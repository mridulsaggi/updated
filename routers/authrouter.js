import express from "express";
import { teacherregister } from "../register/teacherregister.js";
import { studentregister } from "../register/studentregister.js";
import { studentlogin } from "../login/studentlogin.js";
import { teacherlogin } from "../login/teacherlogin.js";
import { logout } from "../logout.js";
import { isauth } from "../isauth.js";
import { hello } from "../hello.js";
const router=express.Router();
router.get("/logout",logout)
router.get("/",(req,res)=>{res.send("hi")})
router.post("/teacherregister",teacherregister);
router.post("/studentregister",studentregister);
router.post("/teacherlogin",teacherlogin);
router.post("/studentlogin",studentlogin);
router.get("/getdet",isauth,hello);
router.get("/logout",logout);
export default router;