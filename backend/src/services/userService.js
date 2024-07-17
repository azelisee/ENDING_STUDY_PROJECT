const User = require('../models/userModel');

exports.getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error(error.message);
    }
};


