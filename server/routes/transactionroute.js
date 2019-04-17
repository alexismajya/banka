import express from'express';
var transactionRouter = express.Router();


import {AllTransactions,debitAccount} from'../controllers/transactionControler';


transactionRouter.get('/api/v1/transactions', AllTransactions);
transactionRouter.post('/api/v1/debitAccounts', debitAccount);


module.exports = transactionRouter;