/**
 * Node.js 환경에서 테스트
 */

// load UPPERCASE-CORE-NODE
require('../../UPPERCASE-CORE/NODE.js');

RUN(function() {
	'use strict';

	var
	// test.
	test = function(path) {
		require('./' + path + '.js');
	};
	
	BOX('TestBox');
	
	// UPPERCASE-CORE-COMMON
	if (false) {
		test('COMMON/TO_DELETE');
		test('COMMON/METHOD');
		test('COMMON/OOP/CLASS');
		test('COMMON/OOP/OBJECT');
		test('COMMON/UTIL/NEXT');
		test('COMMON/UTIL/PARALLEL');
		test('COMMON/UTIL/NUMBER/INTEGER');
		test('COMMON/UTIL/NUMBER/REAL');
		test('COMMON/UTIL/DATA/CHECK_IS_DATA');
		test('COMMON/UTIL/DATA/CHECK_IS_EMPTY_DATA');
		test('COMMON/UTIL/DATA/COUNT_PROPERTIES');
		test('COMMON/UTIL/DATA/PACK_DATA');
		test('COMMON/UTIL/DATA/UNPACK_DATA');
		test('COMMON/UTIL/ARRAY/CHECK_IS_ARRAY');
		test('COMMON/UTIL/ARRAY/CHECK_ARE_SAME');
		test('COMMON/UTIL/DATA_AND_ARRAY/CHECK_IS_IN');
		test('COMMON/UTIL/DATA_AND_ARRAY/COPY');
		test('COMMON/UTIL/DATA_AND_ARRAY/EXTEND');
		test('COMMON/UTIL/DATA_AND_ARRAY/COMBINE');
		test('COMMON/UTIL/DATA_AND_ARRAY/FIND');
		test('COMMON/UTIL/DATA_AND_ARRAY/REMOVE');
		test('COMMON/UTIL/ARGUMENTS/CHECK_IS_ARGUMENTS');
		test('COMMON/UTIL/FUNCTION/RUN');
		test('COMMON/UTIL/REPEAT/REPEAT');
		test('COMMON/UTIL/REPEAT/EACH');
		test('COMMON/UTIL/STRINGIFY');
		test('COMMON/UTIL/PARSE_STR');
		test('COMMON/UTIL/VALID');
		test('COMMON/UTIL/DATE/CALENDAR');
		test('COMMON/UTIL/DELAY/DELAY');
		test('COMMON/UTIL/DELAY/INTERVAL');
		// test('COMMON/UTIL/DELAY/LOOP');
		test('COMMON/UTIL/OVERRIDE');
		test('COMMON/UTIL/NUMBER/RANDOM');
		test('COMMON/UTIL/RANDOM_STR');
		test('COMMON/UTIL/FUNCTION/RAR');
	}
	
	// UPPERCASE-CORE-NODE
	if (true) {
		//test('NODE/MINIFY/MINIFY_JS');
		
		//test('NODE/CONSOLE/SHOW_ERROR');
		
		//test('NODE/SYSTEM/CPU_USAGES');
		//test('NODE/SYSTEM/MEMORY_USAGE');
		//test('NODE/SYSTEM/DISK_USAGE');
		
		//test('NODE/SERVER/WEB_SERVER');
		
		//test('NODE/IMAGEMAGICK/IMAGEMAGICK_CONVERT');
		//test('NODE/IMAGEMAGICK/IMAGEMAGICK_IDENTIFY');
		//test('NODE/IMAGEMAGICK/IMAGEMAGICK_READ_METADATA');
		//test('NODE/IMAGEMAGICK/IMAGEMAGICK_RESIZE');
		
		//test('NODE/SERVER/SOCKET_SERVER');
		//test('NODE/SERVER/CONNECT_TO_SOCKET_SERVER');
		
		//test('NODE/CLUSTERING/CPU_CLUSTERING');
		test('NODE/CLUSTERING/SHARED_STORE');
	}
	
	// init all singleton objects.
	INIT_OBJECTS();
}); 