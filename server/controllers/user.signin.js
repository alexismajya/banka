import config from'../config/config.json';
import myTok from 'jsonwebtoken';
import info_users from'../models/info_users';
import bcrypt from'bcrypt';

module.exports = {
    
    signIn: (req, res) => {

        let loggedUser = info_users.find(u => u.email === req.body.email && u.password === req.body.password);

            if(!loggedUser) return res.status(404).json({status: 401, message:'the email and/or password is invalid'});

            else{
                const Trueuser = {
                firstName: loggedUser.firstName,
                lastName: loggedUser.lastName,
                email: loggedUser.email,
                status: loggedUser.status,
                isAdmin: loggedUser.isAdmin,
            }
            res.status(200).json({status:200, data: Trueuser});
        }

    },

    
}

