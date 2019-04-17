import express from'express';
var userSignUpRouter = express.Router();


import {getUsers,signUp,findUser} from'../controllers/user.signup';


userSignUpRouter.get('/api/v1/info_users', getUsers);
userSignUpRouter.get('/api/v1/info_users/:id', findUser);
userSignUpRouter.post('/api/v1/auth/signup', signUp);


module.exports = userSignUpRouter;