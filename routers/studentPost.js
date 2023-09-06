import express from "express";
import { deletePost, getPost, likePost, newPost, timelinePost, updatePost } from "../controllers/Post.js";
import {StudentPost} from "../models/StudentPost.js"

const studentrouter = express.Router();

//create a Post
studentrouter.post('/', (req,res) => newPost(req,res,StudentPost));

//update a Post 
studentrouter.put("/:id", (req,res) => updatePost(req,res, StudentPost));

// delete a Post
studentrouter.delete("/:id", async(req,res)=> deletePost(req,res, StudentPost))

 //Like a post
 studentrouter.put("/:id/like", async (req,res)=> likePost(req,res, StudentPost));

//get a Post
studentrouter.get("/:id", async(req,res)=> getPost(req,res, StudentPost));

//get timeline posts
studentrouter.get("/timeline/all", async(req,res)=> timelinePost(req,res, StudentPost));

export default studentrouter;