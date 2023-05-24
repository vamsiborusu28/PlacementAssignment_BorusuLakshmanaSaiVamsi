import mongoose from "mongoose";
import JWT from 'jsonwebtoken';


const userSchema=new mongoose.Schema({
    email:String,
    password:{
        type:String,
        require:true,
        minLength:[8,"Password should contain min 8 characters"],
        select:false,
    },
})




userSchema.method({
    getJWTToken: function(){
        /* JWT.sign(payload,JWTSecret,options)
        payload contains some info like unique id or something which can be used for generate the token
        JWTSecret is secret key by which we can access the resources if this fell into wrong one the application can get hacked
        options contains info like jwt token expiry like 2d 3d etc
        */
        JWT.sign({_id:this._id},config.JWT_SECRET, {
            expiresIn:config.JWT_EXPIRESIN,
        })        
    },
})


export default mongoose.model("User",userSchema);