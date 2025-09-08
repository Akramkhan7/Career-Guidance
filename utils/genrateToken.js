const jwt = require('jsonwebtoken');
const { emit } = require('../models/user');

const generateToken = (user) => {
    return jwt.sign(
        {email : user.email, id : user.id},
        process.env.JWT_KEY,
    );
};