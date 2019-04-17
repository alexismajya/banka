import express from'express';
var accountRouter = express.Router();


import {getAllAccounts,createAccount,findAccount} from'../controllers/accountControler';


accountRouter.get('/api/v1/accounts', getAllAccounts);
accountRouter.post('/api/v1/createAccounts', createAccount);
accountRouter.get('/api/v1/accounts/AccNum', findAccount);


module.exports = accountRouter;