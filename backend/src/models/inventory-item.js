"use strict";

const mongoose = require('mongoose');

var InventroyItemSchema = new mongoose.Schema({
	startDate: {
		type: Date,
        required: true,
        validate: function(input) {
            /* return true only if the input is a valid date, AND is 
            greater than or equal to the current date/time */
            return typeof new Date(input) === 'date' && new Date(input) >= new Date();
        }
    },
    endDate: {
		type: Date
    },
    pricePerUnit: {
        type: Number,
        required: true
    },
    totalUnitsCount: {
        type: Number,
        required: true
    },
    minUnitsPerOrder: {
        type: Number,
        required: true
    },
    orderUnit: {
        type: String,
        enum: ['KG', 'Box', 'Bottle', 'Package'],
        required: true
    }
});

module.exports = mongoose.model('InventroyItem', InventroyItemSchema);