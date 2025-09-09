const mongoose = require('mongoose');
const connectDb = async () => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/career_guidance")
    }catch(err){
         console.error("DB Connection Failed:", error);
    }
}

module.exports = connectDb;