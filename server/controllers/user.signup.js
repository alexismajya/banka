import config from'../config/config.json';
import myTok from 'jsonwebtoken';
import info_users from'../models/info_users';
import bcrypt from'bcrypt';

module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(info_users);
   },


    signUp: (req, res) => {
        if (!req.body.lastName){
            return res.status(400).json('Names required');
        }

    else{
        const userData = {
        id:info_users.length +1,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password,10),
        type:req.body.type, 
        isAdmin:req.body.isAdmin, 
        token:myTok.sign({ sub: userData.id }, config.secret)
    };
     info_users.push(userData);
     res.status(200).json({status:200, info_users: userData});
    }
    },

    findUser:({ email, pass }) =>{
    const user = info_users.find(u => u.email === email && u.password === pass);
        if (user) {
        const token = myTok.sign({ sub: user.id }, config.secret);
            const { password, ...userWithoutPassword } = user;
             return {
             ...userWithoutPassword,
             token
            };
        }
    },

    //getUsers:() =>{
        //return data.info_users.map(u => {
        //const { password, ...userWithoutPassword } = u;
        //return userWithoutPassword;
       // });
    //}
    
}
