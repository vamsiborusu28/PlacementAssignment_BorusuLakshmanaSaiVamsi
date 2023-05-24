import JWT from 'jsonwebtoken';
import User from './models/user.schema.js';


export const isLoggedIn=( async(req,res,next) => {
    let token;
    // check for the given request contains valid jwt token or not
    if(req.cookies.token || (req.headers.authorization && req.headers.authorization.starsWith('bearer') )){
        token=req.cookies.token || req.headers.authorization.split(" ")[1];
    }

    if(!token){
        throw new CustomError("Not authorized to access this resource",400);
    }

    try{
        const decodedPayload=JWT.verify(token,config.JWT_SECRET);
        req.user=User.findById(decodedPayload._id,"name email role"); // first argument used for finding and second argument used for requested attributes
    }
    catch(error){
        res.status(400).send("User Not Logged In");
    }


});