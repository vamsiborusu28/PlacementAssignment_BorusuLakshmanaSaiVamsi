import mongoose from "mongoose";
import app from './src/app.js'
(async () => {

    try{
       await mongoose.connect('mongodb://localhost:27017/blogapp');
       console.log("Database Connected Successfully");
    
        app.on('error', (error) => 
        {
            console.error(error);
            throw error
        });
    
        // Listen to the port 
        app.listen(3000, () => {
            console.log(`Application is running on port 3000 successfully`);
        })
    }catch(err){
        console.log("Error",err);
        throw err;
    }
    
    }) ()