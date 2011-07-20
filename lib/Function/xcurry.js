// Nested curry, applies the function on n call
// 
// xcurry(f, 3, args0…)(args1…)(args2…)(args3…) =def f(args0…, args1…, args2…, args3…)


'use strict';

var curry = require('./curry')
  , slice = require('../List/slice').call

  , hold = function hold (f, n, args) {
		args = args.concat(slice(arguments, 3));
		return n <= 0 ? f.apply(this, args) : curry(hold, f, --n, args);
	};

module.exports = function (f, n) {
	var args = slice(arguments, 2);
	return n <= 0 ? f.apply(this, args) : curry(hold, f, --n, args);
};