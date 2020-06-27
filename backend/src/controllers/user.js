const express = require('express')
const User = require('../models/user')
const router = express.Router()

function register(req, res) {
    const user = new User(req.body)
    user.save()
        .then(user => user.generateAuthToken())
        .then( token => res.status(201).send({ user, token }))
        .catch(error => res.status(400).send(error))
}

function login(req, res) {
    const { email, password } = req.body
    User.findByCredentials(email, password).exec()
        .then(user => user.generateAuthToken())
        .then(token => res.send({ user, token }))
        .catch(error => res.status(400).send(error))
}

function me(req, res) {
    res.send(req.user)
}

function logout(req, res) {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token != req.token
    })
    req.user.save()
        .then(user => res.send())
        .catch(error => res.status(500).send(error))
}

function logoutFromAllDevices(req, res) {
    // Log user out of all devices
    req.user.tokens.splice(0, req.user.tokens.length)
    req.user.save()
        .then(user => res.status(200).send())
        .catch(error => res.status(500).send(error))
}

module.exports = {
    register,
    login,
    me,
    logout,
    logoutFromAllDevices
}