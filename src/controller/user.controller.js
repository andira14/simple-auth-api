const Express = require('express');
const UserService = require('../service/user.service');
const router = Express.Router();

router.post('/register', async(req, res) => {
    try{
        const userService = new UserService();
        await userService.registerUser(req.body.username, req.body.password);
        res.json({
            message: 'User Created'
        })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            error: 100,
            message: 'Server Error'
        })
    }
})

module.exports = router;