import express from'express';
var userSignInRouter = express.Router();


import {signIn} from'../controllers/user.signin';


userSignInRouter.post('/api/v1/auth/signIn', signIn);


module.exports = userSignInRouter;