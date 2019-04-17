import config from'../config/config.json';
import myTok from 'jsonwebtoken';
import info_accounts from'../models/info_accounts';

module.exports = {
    getAllAccounts: (req, res) => {
        if (info_accounts.length === 0 ) {
        	res.status(404).json({status:404, error: 'no account created!!'});
      	}

      	else{
        	res.status(200).json({status:200, data: info_accounts});
    	}

   },

   createAccount: (req, res) => {
        if (!parseInt(req.body.accountNumber) || req.body.accountNumber.length !=6) {
        	return res.status(400).json({status:400, error:'Invalid account !, number of digits must be equal to 6'});
        }

    else{
        const Newaccount = {
		        id:info_accounts.length +1,
		        accountNumber:req.body.accountNumber,
		        createdOn:new Date(),
		        owner:req.body.owner,
		        type:req.body.type, 
		        status:"draft", 
		        balance:parseFloat(0.0)
    		};
    	 info_accounts.push(Newaccount);
     	res.status(200).json({status:200, data: Newaccount});
    	}
    },
    findAccount: (req, res) => {
      	const acc = info_accounts.find(a => a.accountNumber === req.params.accountNumber);
         if (acc.length<1)  {
         	return res.status(404).json({error:404, message:'The account was not found'});
         }
         else{

          res.status(200).json({status:200, data: acc});
      	}
    },
    
}