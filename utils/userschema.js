import mongoose from "mongoose"
const teacherschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})
const studentschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },password:{
        type:String,
        require:true,
    }
})
export const teacher=new mongoose.model("teacher",teacherschema)
export const student=new mongoose.model("student",studentschema)