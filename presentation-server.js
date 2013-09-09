var LIVE = true;


var io = require('socket.io').listen(1337);

var clients = [];
var remotes = [];

io.sockets.on('connection', function (socket) {
//	socket.on('connect', function () {
//
//	})

	socket.on('message', function (msg) {
		var j = JSON.parse(msg);		
		switch (j.event) {
				case 'connect':
					if (j.mode === 'slave') {
						clients.push(socket);
						console.log(socket.id + ' connected');
						console.log(clients.length + ' clients connected in total');
						socket.send(JSON.stringify({
							event: 'live',
							isLive: LIVE
						}));
					}
					break;
				case 'navigate-slide':
					console.log('navigating to slide ' + j.slide);
					goToSlide(j.slide);
					break;
				
				case 'navigate-slide-figure':
					console.log('navigating to slide ' + j.slide + ' at figure ' + j.figure);
					goToSlideWithFigure(j.slide, j.figure);
					break;
		}
	});
	socket.on('disconnect', function () {
		var isClient = clients.indexOf(socket) !== -1 ? clients.indexOf(socket) : false;
		if (isClient !== false) {
			console.log('removing socket '+ socket.id);
			clients.splice(isClient, 1);
			console.log(clients.length + ' clients connected in total');
		}
	});
});

function goToSlide(ind) {
	var i = 0,
		l = clients.length;
	for(i;i<l;i++) {
		clients[i].send(JSON.stringify({
			event: 'navigate-slide',
			slide: ind
		}));
	}
}

function goToSlideWithFigure(slideInd, figureInd) {
	var i = 0,
		l = clients.length;
	for(i;i<l;i++) {
		clients[i].send(JSON.stringify({
			event: 'navigate-slide-figure',
			slide: slideInd,
			figure: figureInd
		}));
	}
}