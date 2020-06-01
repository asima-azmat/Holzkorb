"use strict";

const jwt = require('jsonwebtoken')
const config = require('./config')

function checkAuthentication(req, res, next) {
	const token = req.headers['x-access-token']

	if (!token) {
		return res.status(401).send({
			error: 'Unauthorized',
			message: 'No token provided in the request'
		})
	}

	jwt.verify(token, config.JwtSecret, (err, decoded) => {
		if (err) return res.status(402).send({
			error: 'Unauthorized',
			message: 'Failed to authentication token.'
		})

		req.userId = decoded.id
		next()
	})
}

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
}

module.exports = {
	checkAuthentication,
    allowCrossDomain
}