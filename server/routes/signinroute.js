var express = require('express');
var userSignInRouter = express.Router();


const {signIn, viewUsers} = require('../controllers/user.signin');

// the banka User sinup APIs
//userSignInRouter.get('/api/v1/info_users', viewUsers);
userSignInRouter.post('/api/v1/auth/signIn', signIn);


module.exports = userSignInRouter;