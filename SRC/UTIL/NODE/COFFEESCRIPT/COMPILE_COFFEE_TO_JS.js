/**
 * compile CoffeeScript to JavaScript.
 */
global.COMPILE_COFFEE_TO_JS = COMPILE_COFFEE_TO_JS = METHOD(function() {'use strict';

	var
	//IMPORT: CoffeeScript
	CoffeeScript = require('coffee-script');

	return {

		run : function(code) {
			//REQUIRED: code

			return CoffeeScript.compile(code);
		}
	};
});
