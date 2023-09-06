import express, { urlencoded } from "express";
import cp from "cookie-parser";
import { connection } from "./utils/connection.js";
import cors from "cors"
import router from "./routers/authrouter.js";
import tutorrouter from "./routers/tutorPost.js";
import dotenv from "dotenv";
import studentrouter from "./routers/tutorPost.js";
const app=express();
dotenv.config();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
connection();
app.use(cp());
app.use(cors({
    origin:["http://localhost:3001"],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,//to make cookie accessible on frontend also bcz this allows cokkie accessible on diff domains.
}));
app.get("/",(req,res)=>{
    res.send("hello");
})
app.use("/api/tutor-posts",tutorrouter);
app.use("/api/student-posts",studentrouter);
app.use(router)
app.listen(3000,()=>{
    console.log("server running on port 3000");
})