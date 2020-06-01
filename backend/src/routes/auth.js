"use strict"

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')

const config = require('../config')
const UserModel = require('../models/user')

function login(req, res) {
	if (!Object.prototype.hasOwnProperty.call(req.body, 'password')) return res.status(400).json({
		error: 'Bad request',
		message: 'The request body must containe a password property'
	})

	if (!Object.prototype.hasOwnProperty.call(req.body, 'username')) return res.status(400).json({
		error: 'Bad request',
		message: 'The request body must containe a username property'
	})

	UserModel.findOne({username: req.body.username}).exec()
		.then(user => {
			const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
			if (!isPasswordValid) return res.status(401).send({token: null})

			const token = jwt.sign({id: user._id, username: user.username }, config.JwtSecret, {
				expiresIn: 86400
			})

			res.status.json({token: token})
		})
		.catch(error => res.status(404).json({
			error: 'User not found',
			message: error.message
		}))
}

module.exports = login