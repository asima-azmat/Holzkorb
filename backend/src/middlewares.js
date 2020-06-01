"use strict"

const jwt = require('jsonwebtoken')
const config = require('./config')
const User = require('./models/user')

function checkAuthentication(req, res, next) {
	const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, config.JwtSecret)
	User.findOne({ _id: data._id, 'tokens.token': token })
		.then(user => {
        	req.user = user
			req.token = token	
			next()
		})
    	.catch(error => res.status(401).send({ error: 'Not authorized to access this resource' }))
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
