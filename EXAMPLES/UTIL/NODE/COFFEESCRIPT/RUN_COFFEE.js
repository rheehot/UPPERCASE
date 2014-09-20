// load UPPERCASE.JS.
require('../../../../UPPERCASE.JS-COMMON.js');
require('../../../../UPPERCASE.JS-NODE.js');

// load UPPERCASE.IO-UTIL.
require('../../../../UPPERCASE.IO-UTIL/NODE.js');

TEST('RUN_COFFEE', function(ok) {
	'use strict';

	READ_FILE('sample.coffee', function(content) {

		var
		// coffee code
		coffeeCode = content.toString();

		RUN_COFFEE(coffeeCode);

		ok(number === -42);
	});
});
