var express = require('express');
var userSignInRouter = express.Router();


const {signIn, viewUsers} = require('../controllers/user.signin');


userSignInRouter.post('/api/v1/auth/signIn', signIn);


module.exports = userSignInRouter;