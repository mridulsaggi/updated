import express from "express";
import { deletePost, getPost, likePost, newPost, timelinePost, updatePost } from "../Posts/Controllers/Post.js";
import {TutorPost} from "../Posts/models/TutorPost.js"

const tutorrouter = express.Router();

//create a Post
tutorrouter.post('/', (req,res) => newPost(req,res,TutorPost));

//update a Post 
tutorrouter.put("/:id", (req,res) => updatePost(req,res,TutorPost));

// delete a Post
tutorrouter.delete("/:id", async(req,res)=> deletePost(req,res, TutorPost))

 //Like a post
 tutorrouter.put("/:id/like", async (req,res)=> likePost(req,res,TutorPost));

//get a Post
tutorrouter.get("/:id", async(req,res)=> getPost(req,res,TutorPost));

//get timeline posts
tutorrouter.get("/timeline/all", async(req,res)=> timelinePost(req,res,TutorPost));

export default tutorrouter;