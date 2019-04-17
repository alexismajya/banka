import config from'../config/config.json';
import myTok from 'jsonwebtoken';
import info_transactions from'../models/info_transactions';
import info_accounts from'../models/info_accounts';

module.exports = {
    AllTransactions: (req, res) => {
        if (info_transactions.length === 0 ) {
        	res.status(404).json({status:404, error: 'no transaction found'});
      	}

      	else{
        	res.status(200).json({status:200, data: info_transactions});
    	}

   },

   debitAccount: (req, res) => {
        let SearchAcc = info_accounts.find( s => s.accountNumber === req.params.accountNumber);

        if(!SearchAcc){
          return res.status(404).json({ status:401, error: "Account not found !" });

        } 
          
        else if (SearchAcc.balance < parseFloat(req.body.amount)) {
            res.status(404).json({error:401, message: `Insufficient amount ## ${SearchAcc.balance} ##? !!`});
        }
           else {
  
                const debitAcc = {
                  id:info_transactions.length +1,
                  createdOn:new Date(),
                  type:"debit", 
                  accountNumber:req.params.accountNumber,
                  cashier:req.body.cashier,
                  amount:parseFloat(req.body.amount),
                  newBalance:SearchAcc.balance - (parseFloat(req.body.amount)),
              
                 };


                var pos = 0;
                info_accounts.forEach((account) => {
                  if (account.accountNumber == req.params.accountNumber) {
                    info_accounts[pos].balance = debitAcc.newBalance;
                  }

                  pos++;
                });

                 info_transactions.push(debitAcc);
                 res.status(200).json({success:200, data: debitAcc});
           }
    },
    
}