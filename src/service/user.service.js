const UserRepository = require("../repository/user.repository");

class UserService {
    async registerUser(username, password){
        return UserRepository.registerUser(username, password);
    }
}

module.exports = UserService;