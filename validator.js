'use strict';
var ZSchema = require('z-schema');
var schema = require('./schema');

function validate(hireJSON, callback) {
  var callbackWrapper = function(err, valid) {
    if(err) {
      callback(err)
    } else {
      callback(null, {valid: valid});
    }
  }

  new ZSchema().validate(hireJSON, schema, callbackWrapper);
}

module.exports = {
  validate: validate,
  schema: schema
};
