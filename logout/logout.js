export const logout=async(req,res)=>{
    res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now())
    })
}