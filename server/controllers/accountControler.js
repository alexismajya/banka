import config from'../config/config.json';
import myTok from 'jsonwebtoken';
import info_accounts from'../models/info_accounts';

module.exports = {
    getAllAccounts: (req, res) => {
        res.status(200).send(info_accounts);
   },
    
}