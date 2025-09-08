const userModel = require("../models/user");
const bcrypt = require('bcryptjs')
const { generateToken } = require('../utils/genrateToken');
const { model } = require("mongoose");

module.exports.registerUser = async function(req, res){
    try{
    let{username, password, fullname} = req.body;

    let existingUser = await userModel.findOne({email});
    if (existingUser) return res.status(401).send("You already have an Account, Please Login.");

    bcrypt.genSalt(10, function(err, salt){
        if (err) return res.status(500).send("Salt generation failed");

        bcrypt.hash(password ,salt, async function(err, hash){
               if (err) return res.status(500).send("Hashing failed");
        
               let user = await userModel.create({
                username,
                password:hash,
                fullName: fullname,
               });

               let token = generateToken(user);
               res.cookie("token", token);
                res.send("User created successfully");
        })

    })
}catch(err){
     res.status(500).send(err.message);
}
}


module.exports.loginUser = async function(req, res){
    let {email,password } = req.body;
    let user = userModel.findOne({email});
    if(!user) return res.status(401).send("Email or Password Incorrect");

    bcrypt.compare(password, user.password, function(err, result){
        if(result){
          let token = generateToken(user);
          res.cookie("token",token);
        res.rener("home");
        }else{
             return res.status(401).send("Email or Password Incorrect");
        }
    })
}

module.exports.logOut = async function(req, res){
    res.cookie("token", "");
     res.redirect('/');
}
