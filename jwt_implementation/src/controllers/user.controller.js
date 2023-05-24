import User from './models/user.schema.js';



export const login =asyncHandler( async (req,res) => {
    const {email,password}=req.body;

    if(!email || !password){
       throw new CustomError("Please cannot be empty",400);
    }

    const user=User.findOne({email}).select("+password");

    if(!user){
       throw new CustomError("User not found",400);
    }

   const comparePassword=user.comparePassword(password);

   if(comparePassword){
       //get jwt token
       const token=user.getJWTToken();

       //return the response
       res.status(200).json({
           sucess:true,
           message:"login found successfully",
           user,
           token,
       })
      
   }
});





