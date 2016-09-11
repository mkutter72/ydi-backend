 'use strict';

//var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// export a mongoose model

var donorSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  amount : {
    type : String,
    required : true
  },
});

module.exports = donorSchema;
