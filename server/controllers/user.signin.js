const express = require('express');
const router = express.Router();
const loggeduser = require('./user.signup');

function signIn(req, res, next) {
    loggeduser.findUser(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'email or password is incorrect' }))
        .catch(err => next(err));
}

function viewUsers(req, res, next) {
    loggeduser.getUsers()
        .then(info_users => res.json(info_users))
        .catch(err => next(err));
}