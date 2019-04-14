const config = require('../config/config.json');
const myTok = require('jsonwebtoken');
const data = require('../models/info_users');
const bcrypt = require('bcrypt');

//The following are sign up APIs (signup, finduser, returnallusers)

module.exports = {
    //getUsers: (req, res) => {
      //   res.status(200).send(data.info_users);
   // },


    signUp: (req, res) => {
        if (!req.body.firstName || req.body.firstName.length <2 || !req.body.email ||!req.body.password)
            return res.status(400).send('Names, password and email are required');

    else{
        const userData = {
        id:data.info_users.length +1,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password,10),
        type:req.body.type, 
        isAdmin:req.body.isAdmin, 
        token:myTok.sign({ sub: user.id }, config.secret)
    };
     data.info_users.push(userData);
     res.status(200).json({status:200, data: userData});
    }
    },

    findUser:({ email, pass }) =>{
    const user = data.info_users.find(u => u.email === email && u.password === pass);
        if (user) {
        const token = myTok.sign({ sub: user.id }, config.secret);
            const { password, ...userWithoutPassword } = user;
             return {
             ...userWithoutPassword,
             token
            };
        }
    },

    getUsers:() =>{
        return data.info_users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
        });
    }
    
}
