'use strict';
var index;

index = require('./index');

module.exports = function routes(app) {
	app.get('/', index);
};
