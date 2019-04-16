import express from'express';
var accountRouter = express.Router();


import {getAllAccounts} from'../controllers/accountControler';


accountRouter.get('/api/v1/accounts', getAllAccounts);


module.exports = accountRouter;