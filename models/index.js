'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('Donor', require('./Donor'));

mongoose.connect(process.env.MONGODB_URI);

module.exports = mongoose;
