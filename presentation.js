(function () {
	'use strict';
	var presentation = {

		index: 0,
		length: 0,
		slides: [],
		hasPermissions: false,

		init: function () {
			//Assemble the slide objects
			var slides = Array.prototype.slice.call(document.querySelectorAll('#container > section')),
				slide;
			slides.forEach(function (el, i) {
				slide = {
					el: el,
					index: i,
					notes: ''
				}
				
				var notes = el.querySelector('figcaption');
				if (notes) {
					slide.notes = notes.innerHTML;
				}

				var article = el.querySelector('article');
				if (article) {
					slide.article = article;
					slide.figureIndex = 0;
					slide.figuresLength = article.children.length;
				}

				presentation.slides.push(slide);
			});

			this.length = this.slides.length;
			this.container = document.getElementById('container');

			//Highlight the code blocks
			var codeBlocks = Array.prototype.slice.call(document.querySelectorAll('code'));
			codeBlocks.forEach(function (el) {
				hljs.highlightBlock(el);
			});


			this.rc.setupSocket();

			if(this.rc.enabled && location.href.indexOf('?') > 0) {
				document.body.classList.add('controls');
			}
			
			//Navigate to a particular slide by hash
			if ( !! document.location.hash && !isNaN(parseInt(document.location.hash.replace('#', '')))) {
				this.goToSlide(parseInt(document.location.hash.replace('#', '')));
			}
			this.container.className = 'loaded';
			document.addEventListener('keydown', function (e) {
				//console.log(e.keyCode);
				switch (e.keyCode) {
				case 40:
					//Down arrow
					presentation.hasPermissions && presentation.nextSlide();
					break;
				case 38:
					//Up arrow
					presentation.hasPermissions && presentation.prevSlide();
					break;
				case 32:
					//Spacebar
				case 39:
					//Right arrow
					presentation.hasPermissions && presentation.nextFigure();
					break;
				case 37:
					//Left arrow
					presentation.hasPermissions && presentation.prevFigure();
					break;
				case e.keyCode === 27:
					console.log('ESCAPE');
					break;
				}

			}, false);
			
			document.getElementById('left-arrow').addEventListener('click', function(e) {
				presentation.hasPermissions && presentation.prevFigure();
			}, false);
			document.getElementById('right-arrow').addEventListener('click', function(e) {
				presentation.hasPermissions && presentation.nextFigure();
			}, false);
			
			
			customStuff();
		},

		transformDeck: (function (offset) {
			function getTransformProperty(element) {
				// Note that in some versions of IE9 it is critical that
				// msTransform appear in this list before MozTransform
				var properties = [
					'transform',
					'WebkitTransform',
					'msTransform',
					'MozTransform',
					'OTransform'
				];
				var p;
				while (p = properties.shift()) {
					if (typeof element.style[p] != 'undefined') {
						return p;
					}
				}
				return false;
			}
			var transformProperty = getTransformProperty(document.body);
			return function (offset) {
				this.container.style[transformProperty] = 'translate3d(0,' + offset + ',0)';
			}
		})(),

		transformArticle: (function (offset) {
			function getTransformProperty(element) {
				// Note that in some versions of IE9 it is critical that
				// msTransform appear in this list before MozTransform
				var properties = [
					'transform',
					'WebkitTransform',
					'msTransform',
					'MozTransform',
					'OTransform'
				];
				var p;
				while (p = properties.shift()) {
					if (typeof element.style[p] != 'undefined') {
						return p;
					}
				}
				return false;
			}
			var transformProperty = getTransformProperty(document.body);
			return function (offset) {
				this.currentSlide().article.style[transformProperty] = 'translate3d(' + offset + ',0,0)';
			}
		})(),

		goToSlide: function (ind, isRemote) {
			if (ind < 0 || ind >= this.length) return;
			this.index = ind;
			this.transformDeck(-ind * 100 + '%');
			document.getElementById('notes').innerHTML = this.currentSlide().notes;
			document.location.href = '#' + ind;
			if (!isRemote) this.rc.goToSlide(ind);
		},

		nextSlide: function () {
			this.goToSlide(this.index + 1);
		},

		prevSlide: function () {
			this.goToSlide(this.index - 1);
		},

		goToFigure: function (ind, isRemote) {
			if (ind < 0 || ind >= this.currentSlide().figuresLength) return;
			//			if(ind < 0) {
			//				this.prevSlide();
			//				return;
			//			}
			//			if(ind >-this.currentSlide().figuresLength) {
			//				this.nextSlide();
			//				return;
			//			}
			this.currentSlide().figureIndex = ind;
			this.transformArticle(-ind * 90 + '%');
			if (!isRemote) this.rc.goToSlideWithFigure(this.currentSlide().index,ind);
		},

		nextFigure: function () {
			var ind = this.currentSlide().figureIndex + 1,
				currentSlide = this.currentSlide();
			if (currentSlide.article && ind < currentSlide.figuresLength) {
				this.goToFigure(currentSlide.figureIndex + 1)
			} else {
				this.nextSlide();
			}
		},

		prevFigure: function () {
			var ind = this.currentSlide().figureIndex - 1,
				currentSlide = this.currentSlide();
			if (currentSlide.article && ind >= 0) {
				this.goToFigure(ind)
			} else {
				this.prevSlide();
			}
		},
		
		goToSlideWithFigure: function(slideInd, figureInd) {
			this.goToSlide(slideInd, true);
			this.goToFigure(figureInd, true);
		},
		
		currentSlide: function () {
			return this.slides[this.index];
		},

		rc: {
			enabled: false,
			socket: undefined,

			setupSocket: function () {
				if (window.io != null) {
					console.log(this);
					this.enabled = true;
				} else {
					presentation.hasPermissions = true;
					return;
				}
				var socket = io.connect('http://' + location.hostname + ':1337');
				this.socket = socket;
				socket.on('connect', function () {
					socket.send(JSON.stringify({
						event: 'connect',
						mode: 'slave'
					}));

					socket.on('message', function (msg) {
						var j = JSON.parse(msg);
						switch (j.event) {
							case 'navigate-slide':
								presentation.goToSlide(j.slide, true);
								break;
							case 'navigate-slide-figure':
								presentation.goToSlideWithFigure(j.slide, j.figure);
								break;
							case 'live':
								if(!!localStorage.getItem('name')) {
									if(localStorage.getItem('name') === config.remoteName) {
										document.body.classList.add('controls');
										document.body.classList.remove('modal');
										presentation.hasPermissions = true;
										localStorage.setItem('name', 'remote');
									} else if(localStorage.getItem('name') === config.displayName) {
										document.body.classList.remove('modal');
										presentation.hasPermissions = true;
										localStorage.setItem('name', 'display');
									}
									return;
								}
																
								console.log('WE ARE LIVE, ASK FOR DETAILS');
								document.body.classList.add('modal');
								presentation.hasPermissions = false;
								var form = document.querySelector('#welcome form'),
									nameInput = form[0];
								form.onsubmit = function(e) {
									e.stopPropagation();
									e.preventDefault();
									var name = nameInput.value;
									
									
									if(name === config.remoteName) {
										document.body.classList.add('controls');
										document.body.classList.remove('modal');
										presentation.hasPermissions = true;
										localStorage.setItem('name', 'remote');
									} else if(name === config.displayName) {
										document.body.classList.remove('modal');
										presentation.hasPermissions = true;
										localStorage.setItem('name', 'display');
									} else {
										document.body.classList.remove('modal');
										localStorage.setItem('name', name);
									}
								}
								
								break;
						}
					});
				});
			},

			goToSlide: function(ind) {
				if (!this.enabled) return;
				this.socket.send(JSON.stringify({
					event: 'navigate-slide',
					slide: ind
				}));
			},
			
			goToSlideWithFigure: function(slideInd, figureInd) {
				if (!this.enabled) return;
				this.socket.send(JSON.stringify({
					event: 'navigate-slide-figure',
					slide: slideInd,
					figure: figureInd
				}));
			},
		}

	}
	
	var config = {
		remoteName: 'remote',
		displayName: 'display'
	}
	
	document.addEventListener("DOMContentLoaded", function (e) {
		presentation.init();
	}, false);
	
	
	function customStuff() {
		document.querySelector('div.fullflex').addEventListener('click', function() {
			document.querySelector('div.fullflex').classList.toggle('active');
		}, false);
	}
	
})();