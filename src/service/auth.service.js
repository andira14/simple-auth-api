const UserRepository = require("../repository/user.repository");
const PasswordHash = require("../util/passwordHash.util");

class AuthService{
    async login(username, password){
        const userData = await UserRepository.getByUsername(username);
        if(userData === null){
            return null;
        }
        if(PasswordHash.userPasswordHash(password) !== userData.password || userData.username !== username){
            return null;
        }

        return {
            username: userData.username,
            createdAt: userData.created_at,
            updatedAt: userData.updated_at
        };
    }
}

module.exports = AuthService;