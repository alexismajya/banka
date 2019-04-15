var express = require('express');
var userSignUpRouter = express.Router();


const {getUsers,signUp, findUser} = require('../controllers/user.signup');

// the banka User sinup APIs
userSignUpRouter.get('/api/v1/info_users', getUsers);
userSignUpRouter.get('/api/v1/info_users/:id', findUser);
userSignUpRouter.post('/api/v1/auth/signup', signUp);


module.exports = userSignUpRouter;