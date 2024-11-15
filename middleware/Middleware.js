import userModel from "../models/User.js"


export const isAdmin=async(req,res,next)=>{
try {
    const{email} = req.body;

   const userInfo = await userModel.findOne({email})

   if(userInfo && userInfo.role=="Admin")
   {
    next();
    //proceed
   }
   else{
    res.status(403).json({
        message:"Access Denied, only admins can access"
    })
   }
} catch (error) {
    res.status(500).json({
        message:"Internal server error"
    })
}
}