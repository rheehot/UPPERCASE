var
// room
room1 = TestBox.ROOM('testRoom'),

// connect.
connect = RAR(function() {

	CONNECT_TO_ROOM_SERVER({
		port : 9127,
		fixServerPort : 9128
	}, function(on) {

		console.log('connected.');

		on('__DISCONNECTED', function() {
			console.log('disconnected. trying to reconnect.');
			connect();
		});
	});
});

INTERVAL(1, function() {

	room1.send({
		methodName : 'msg',
		data : {
			test2 : 'Hello, Test!',
			date : new Date()
		}
	}, function(result) {
		console.log(result);
	});
});

