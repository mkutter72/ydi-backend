'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.model('Donor', require('./Donor'));

mongoose.connect("mongodb://localhost/ydi-ride");

module.exports = mongoose;
