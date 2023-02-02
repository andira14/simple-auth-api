const Express = require('express');
const AuthService = require('../service/auth.service');
const router = Express.Router();

router.post('/login', async(req,res, next) => {
    try{
    const {username, password} = req.body;

    const authService = new AuthService();
    const userData = await authService.login(username, password);
    if(userData === null){
        return res.json({
            error:{
                code: 100,
                message: 'User not found'
            }
        })
    }
    return res.json({
        data: userData
    })
    }catch(e){
        next(e)
    }
});

module.exports = router;