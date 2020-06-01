"use-strict";

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	usename: {
		type: String, 
		required: true
	},
	password: {
		type: String,
		required: true,
		unique: true
	}
});

UserSchema.set('versionKey', false);

module.exports = mongoose.model('User', UserSchema);