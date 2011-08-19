// Analogous to Array.prototype.some
//
// Returns true if any key-value pair satisfies the provided
// testing function.

'use strict';

var f     = require('../../Function/functionalize')
  , s     = require('../../Function/s').call
  , pluck = require('./pluck').bind;

module.exports = f(function (callback, scope) {
	return Object.keys(this).some(s(callback, pluck(this)), scope);
});