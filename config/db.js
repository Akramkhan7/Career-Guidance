const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/career_guidance`);
        console.log("Running...")
    }catch(err){
         console.error("DB Connection Failed:", err);
    }
}
module.exports = connectDb;


module.exports = connectDb;