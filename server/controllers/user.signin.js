import express from 'express';
const router = express.Router();
import loggeduser from'./user.signup';

function signIn(req, res, next) {
    loggeduser.findUser(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'email or password is incorrect' }))
        .catch(err => next(err));
}

