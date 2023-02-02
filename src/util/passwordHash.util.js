require('dotenv').config();
const crypto = require('crypto');

class PasswordHash{
    static userPasswordHash(password){
        return crypto.createHash('md5').update(`${process.env.PASSWORD_SALT}${password}-${process.env.PASSWORD_SALT}`).digest('hex')
    }
}

module.exports = PasswordHash;