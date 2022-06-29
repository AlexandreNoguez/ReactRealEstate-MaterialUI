const mongoose = require('../database');

const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    rentOrBuy: {
        type: String,
        require: true,
    },
    value: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
}, {timestamps: true});


const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;