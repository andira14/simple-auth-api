const userModel = require("../model/user.model");
const crypto = require('crypto');
const PasswordHash = require("../util/passwordHash.util");
require('dotenv').config();

class UserRepository{
    static async getByUsername(username){
        return userModel.findOne({
            where:{
                username
            }
        })
    }

    static async registerUser(username, password){

        return userModel.create({
            username, 
            password: PasswordHash.userPasswordHash(password)
        })
    }
}

module.exports = UserRepository;