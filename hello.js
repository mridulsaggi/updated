export const hello=(req,res)=>{
    res.json({
        message:req.data,
        sucess:true
    })
}