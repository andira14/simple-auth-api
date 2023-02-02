require('dotenv').config();
const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const port = process.env.PORT;
const authController = require('./src/controller/auth.controller');
const userController = require('./src/controller/user.controller');

app.use(bodyParser.json());

app.use('/auth', authController)
app.use('/user', userController)

app.use((err, req, res, next) => {
    console.info(err);
  
    return next(err.stack);
  });

app.use((err, _, res, next) => {
    if(err){
        console.log(err)
        return;
    }
    return next();
})

app.listen(Number(port), () => {
    console.log(`Server running on port ${port}`);
})