/*jslint browser:true, eqeqeq:true, forin:true, nomen:true, undef:true */
/*global $, jQuery, window, escape,
		readCookie, PasswordStrength,
         CQ_ASSETS_URL, WS_URL, SWS_URL, I18N, GLOBAL_LOGGED_IN, CONTEXT_PATH, LOCALE,
         MapPanel, RequirementsVO, Utils, RequirementVO, pio */

$.ajaxSetup({
	type:"GET",
	dataType: "json",
	beforeSend: function (xhr) {
		xhr.setRequestHeader("Accept", "application/json");
	}
});

var pio = window.pio || {}; // Bug #22517

$(document).ready(function(){
	var lh = location.hostname.split('.'),
		lhl = lh.length,
		mydomstr= lh[lhl-1]
	;
	mydomstr = lh[lhl-2] ? lh[lhl-2] +"."+ mydomstr : mydomstr;

	// should catch all possible attempts at labelling an external link in one go.
	$('a[href^="http"]:not([href*="'+mydomstr+'"]),a.newwindow,a:has(span.external),a[rel="external"]').live('click',function(){
		return !window.open(this.href);
	});
	$('.ac_input').live("keydown", function(e) { // Bug #18343 - Clear typeahead hidden field on backspace
		if(parseInt(e.keyCode,10) === 8) { $(e.target).closest('form').find('.quickSearchHiddenField').val("");}
	});

	if (document.location.href.indexOf('/errors/') > -1) {
		if(parent.window.location.href != document.location.href){
			top.location.replace(document.location.href);
		}
	}

});

if ($.validator !== undefined) {
	$.validator.setDefaults({
		highlight: function(element, errorClass) {
			var $element = $(element);
			$element.parents('form').find('label[for="'+$element.attr('id')+'"]').addClass('errorLabel');
		},
		unhighlight: function(element, errorClass) {
			var $element = $(element);
			$element.parents('form').find('label[for="'+$element.attr('id')+'"]').removeClass('errorLabel');
		},
		errorPlacement: function(){}
	});
	$.validator.addMethod('nicetext', function(value) {
		return (/^[a-zA-Z-'\s]*$/).test(value);
	});
	$.validator.addMethod('javaemail', function(value) {
		return (/^[_A-Za-z0-9\-\+]+(\.[_A-Za-z0-9\-\+]+)*@([A-Za-z0-9\-])+(\.[A-Za-z0-9\-]+)*((\.[A-Za-z0-9]{2,})|(\.[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}))$/).test(value);
	});

}

// just a factory for elements
$.el = function(type){
	return $(document.createElement(type));
};

// Dummy PNG fix "library", which allows you to always run these functions without bothering to check whether you're running IE and/or the library is actually loaded
var DD_belatedPNG = {
	fix:function(e) {},
	fixPng:function(e) {}
};

function loadExternalOverlay() {}


(function($) {

	//
	// Login & View Bookings links constructor
	// Call this sucker on div#utils to initialise
	//
	$.fn.loginutils = function() {

		var $this = $(this),
			$viewCancel = $this.find("li.viewcancel"),
			$viewCancelLink,
			mySelecta = "",
			viewAction = "",
			viewUrl = "",
			urlStub = ""
		;

		if (!this.length || $viewCancel.length < 1) {
			return this;
		}

		// store logged in state
		var LI_COOKIE = readCookie("PILOGIN");
		if (window.GLOBAL_LOGGED_IN === undefined) {
			window.GLOBAL_LOGGED_IN = false;
		}
		window.GLOBAL_LOGGED_IN = readCookie("PILOGIN") !== null ? true : window.GLOBAL_LOGGED_IN;

		// show the appropriate item depending on logged in state
		mySelecta = GLOBAL_LOGGED_IN === true ? ".login" : ".logout";
		$this.find("li.login,li.logout")
			.show()
			.filter(mySelecta)
			.hide()
		;


		// change the view or cancel booking url
		// depending on logged in state
		viewAction = GLOBAL_LOGGED_IN === true ? "/mypremierinn/currentBookings" : "/searchForBooking";
		$viewCancelLink = $viewCancel.find("a");
		viewUrl = $viewCancelLink.attr("href");

		var LOCALE = (window.LOCALE !== undefined) ? window.LOCALE : "en";
		urlStub = viewUrl.substring(viewUrl.indexOf("/"+LOCALE.substring(0,2)));
		// urlStub should be secure URL + context path
		urlStub = viewUrl.substring(0,viewUrl.indexOf(urlStub));

		// rewrite the view or cancel booking URL now
		$viewCancelLink.attr("href", urlStub+"/"+LOCALE+viewAction+".action");
	};

	$.fn.passwordcheck = function() {
		$("#password-strength").hide();

		$(this).bind('keyup blur pwCheck', function(){
			$("#password-strength").slideDown("normal");

			var pstrength=PasswordStrength($(this).val()),
				pmessage = "",
				statusmessage = "";


			switch (pstrength)
			{
				case 0:
					statusmessage="Password strength";
					pmessage="Your password contains invalid characters";
					$("#password-strength .password-status").removeClass("status-strong");
					$("#password-strength .password-status").removeClass("status-weak");
					$("#password-strength .password-status").addClass("status-invalid");
					$(".form-highlite-pword").show();
					$("#password-info").text(pmessage);
					break;
				case 1:
					statusmessage="Password strength";
					pmessage="Your password must be at least 8 characters long";
					$("#password-strength .password-status").removeClass("status-strong");
					$("#password-strength .password-status").removeClass("status-invalid");
					$("#password-strength .password-status").addClass("status-weak");
					$(".form-highlite-pword").show();
					$("#password-info").text(pmessage);
					break;
				case 2:
					statusmessage="Password strength";
					pmessage="Your password should contain a mixture of numbers letters and cases";
					$("#password-strength .password-status").removeClass("status-strong");
					$("#password-strength .password-status").removeClass("status-invalid");
					$("#password-strength .password-status").addClass("status-weak");
					$(".form-highlite-pword").show();
					$("#password-info").text(pmessage);
					break;
				default:
					statusmessage="Your password strength is high";
					$("#password-strength .password-status").removeClass("status-weak");
					$("#password-strength .password-status").addClass("status-strong");
					$(".form-highlite-pword").hide();

			}
			$(".password-status").text(statusmessage);
		});
		return this;
	};
	$.passwordcheck = {
		/**
		 * allow retrieval of info message externally
		 */
		getInfo: function(){
			return $('#password-info').text();
		}
	};

	//
	// Logged in link override - plugin definition
	//
	$.fn.linkoverride = function(newhref) {

		if (!this.length) {return this;}

		return this.each(function() {

			var $this = $(this);
			var LI_COOKIE = readCookie("PILOGIN");

			if (window.GLOBAL_LOGGED_IN === undefined) {window.GLOBAL_LOGGED_IN = false;}

			window.GLOBAL_LOGGED_IN = (readCookie("PILOGIN") !== null ) ? true : window.GLOBAL_LOGGED_IN;

			if ($this.attr("href").trim !== "" && window.GLOBAL_LOGGED_IN === true) {
				$this.attr("href",newhref);
			}

		});

	};


	//
	// Navigation dropdown rewire - plugin definition
	//

	$.fn.langdropdown = function() {
		if (!this.length) {return this;}

		return this.each(function() {
			var $this = $(this);

			// Language selection dropdown replacement
			$this.hide();

			var lis = "";
			var curlinner = $("form label",$this).html();
			var curli = '<span>'+curlinner+'</span>';

			var thisurl = document.location.pathname;

			$(".lsel",$this).each(function(){
				var $this = $(this);
				var metadata = $this.metadata();
				var txt = $this.html();
				var langClass = (metadata.lang) ? ' l-' + metadata.lang : '';
				txt = txt.split("|");

				var li = '<span class="sect-cc">' + txt[0] + '</span><span class="sect-ln' + langClass + '">' + txt[1] + '</span>';

				//if (curli === null) {curli=li;}
				//if (this.selected) {curli=li;}
				var url;
				url = $this.parents('form').attr('action') + '?' + $this.parents('select').attr('name') + "=" + $this.attr('value');

				var target = "";
				if (metadata.external){
					target = ' onclick="return !window.open(this.href);" ';
				}
				lis += '<li><a href="'+url+'"' + target + '>'+li+'</a></li>';
			});
			$this.before('<div class="ldd-header">'+$(".lsel:first",$this).html()+'</div>');
			$this.append('<div class="ldd-wrapper"><a class="dropdown" href="'+thisurl+'" onclick="return false">'+curli+'</a><div id="selbox"><ul></ul></div></div>');
			$this.find("#selbox ul").html(lis);
			$this.hover(
				function() {
					$this.find('#selbox').stop(true).css('height','auto').slideDown(200);
				},
				function() {
					$this.find('#selbox').stop(true).slideUp(100);
				}
			);

			$this.find("form").css({position:'absolute',left:'-9999px'});
			// Don't bin the form entirely otherwise browser form field value remembering (on back) doesn't work any more, as form counts on the page mismatch between load-time and submit-time.

			$this.show();

		});

	};


	//
	// Datepicker initialisation - plugin definition
	//

	$.fn.datepickerinit = function() {
		if (!this.length) {return this;}

		// Closure $dayField, $monthField, $this
		return this.each(function() {

			var $this = $(this);
			var $monthField = $this.parent().find(".selectedMonth");
			var $dayField = $this.parent().parent().find(".selectedDay");

			var readLinked = function() {
				$this.val($monthField.val() + $dayField.val());
				DD_belatedPNG.fix('.generated-calendar-top');
				DD_belatedPNG.fix('.generated-calendar-bottom');
				return {};
			};

			// Update two select controls to match a date picker selection
			var updateLinked = function(date) {
				$monthField.find("option[value='" + date.substring(0, 6) + "']").attr("selected", "selected");
				$monthField.change();

				$dayField.find("option:contains(" + date.substring(6, 8) + ")").attr("selected", "selected");
				$dayField.change();
			};

			// Prevent selection of invalid dates through the select controls
			var checkLinkedDays = function() {
				var daysInMonth = 32 - new Date(
					$monthField.val().substring(0,4),
					$monthField.val().substring(4,6) - 1,
					32).getDate();
				var headerSize = $dayField.find('option').size() - 31;
				$dayField.find('option').attr('disabled', '');
				$dayField.find('option:gt(' + (daysInMonth - 1 + headerSize) +')').attr('disabled', 'disabled');
				if ($dayField.val() > daysInMonth) {
					$dayField.val(daysInMonth);
					$dayField.change();
				}
			};

			$this.datepicker({
				dayNamesMin: I18N.CAL_DAY_INITIALS,
				closeText: " ",
				dateFormat: "yymmdd",
				firstDay: 1,
				minDate: 0,
				maxDate: "-1d+1y",
				mandatory: true,
				beforeShow: readLinked,
				onSelect: updateLinked,
				showOn: "both",
				buttonImage: CQ_ASSETS_URL + "images/icons/cal.png",
				buttonImageOnly: true,
				showAnim: "slideDown",
				navigationAsDateFormat: false,
				prevText: "",
				nextText: "",
				changeMonth: false,
				changeYear: false,
				changeFirstDay: false,
				showOtherMonths: true,
				showOptions: {
					direction: "up"
				}

			});

			$monthField.change(checkLinkedDays);
			$dayField.change(checkLinkedDays);

			$monthField.triggerHandler('change');

			DD_belatedPNG.fix('a.ui-datepicker-trigger img');

			var onUnload = function(){
				//$this.unbind('change', onChange);
				//$this.unbind('result', onResult);
				$this.datepicker("destroy");
				$(window).unbind('beforeunload', onUnload);
				readLinked = updateLinked = onUnload = null;
			};
			$(window).bind('beforeunload', onUnload);

		});

	};

	$.fn.expandingpanel = function() {
		if (!this.length) {return this;}
		return this.each(function() {
			var $this = $(this);
			var content = $this.find('.expandingcontent');
			var h4 = $this.find('h4');
			content.hide();
			h4.addClass('expandable').click(function() {
				if (h4.hasClass('expanded')) {
					h4.removeClass('expanded').addClass('expandable');
					content.stop(true).slideUp("normal");
				} else {
					h4.removeClass('expandable').addClass('expanded');
					content.stop(true).css('height','auto').slideDown("normal");
				}
			});
		});
	};





	$.fn.expandingmenu = function(startValue) {
		if (!this.length) {return this;}
		return this.each(function() {
			var $this = $(this);

			// menu code
			$this.find(".subcat2").hide();
			$this.find(".expand").bind('mouseover',function(){
				$(this).css('cursor','pointer');
			});
			$this.find(".expand").click(function(){

				$(this).parent('li').find(".subcat2").toggle("normal");

				if ($(this).is('.expand')) {
					$(".contract").parent('li').find(".subcat2").hide("normal");
					$(".contract").parent('li').find(".contract").addClass('expand');
					$(".contract").parent('li').find(".contract").removeClass('contract');
					$(this).removeClass('expand');
					$(this).addClass('contract');
				} else {
					$(this).removeClass('contract');
					$(this).addClass('expand');
				}
				return false;
			});

			if (startValue !== undefined) {
				$this.find("a[href*='offerCategory="+escape(startValue)+"']").css('color','#FFC726').closest('ul').closest('li').find('a:first').click();
			}

		});
	};





	$.fn.crushspaces = function() {
		if (!this.length) {return this;}
		return this.each(function() {
			var $this = $(this);
			$this.val($this.val().replace(/ /g, ''));
		});
	};


	$.fn.popuplink = function (hotelVO, zoomLevel, bingMapsKey) {
		if (!this.length) {return this;}
		return this.each(function() {
			var $this = $(this);
			$this.click(function(){

				if (typeof window.explore !== 'undefined') {
					window.explore.closeOverlay();
				}

				var throb = $('<div><div class="result" style="height:500px; overflow:auto; -webkit-overflow-scrolling: touch;"><img src="'+CQ_ASSETS_URL+'images/throbber.gif"/></div></div>');
				throb.dialognow(throb, function(w){
					$.ajax({
						url: $this.attr('href'),
						dataType: "html",
						error: function() {
							w.find('.result').html('');
						},
						success: function(html) {

							var content = $(html).find('#termsAndConditions, #privacy, .popupinners').html();
							w.find('.result').html(content);
							$('#hi-image-control','.result').modalgallery();
							$('#mapContainer', '.result').loadmap(hotelVO, zoomLevel, bingMapsKey);
							$.fixJQM(w);
						}
					});
				}, true);
				return false;
			});
		});
	};


	$.fn.loadmap = function(hotelVO, zoomLevel, bingMapsKey){
		if (this.length < 1) {return this}

		var trackBeacon = $("<div/>");
		var hotelBeacon = $("<div/>");
		var offerBeacon = $("<div/>");
		var interactionBeacon = $("<div/>");
		var toastBeacon = new Tally();
		var requirementsBeacon = $('<div/>');
		var networkFunnel = new NetworkFunnel(hotelBeacon, requirementsBeacon, offerBeacon, toastBeacon, [hotelVO]);

		var initial = new VELatLong(hotelVO.latitude, hotelVO.longitude);
		initial.zoom = zoomLevel;
		initial.suppressSearchIcon = true;

		var map = new MapPanel($("#mapContainer"), initial, networkFunnel, hotelBeacon, offerBeacon, interactionBeacon, requirementsBeacon, toastBeacon, trackBeacon, true, false, undefined, bingMapsKey);
		map.showAsSearchResults([hotelVO]);
		networkFunnel.getAllHotels();

	};


	$.fn.modalgallery = function() {

		if (this.length < 1) {return this}

		DD_belatedPNG.fixPng($(".corners")[0]);
		DD_belatedPNG.fix(".imageCaptionContainer");

		$(".imageContainerWrapper, .imageContainer").css("height","235px");
		$(".imageContainerWrapper").css("background","url("+CQ_ASSETS_URL+"images/throbber.gif) no-repeat center center");

		var gallery = $('#hi-image-control').galleriffic('.thumbsContainer', {
			delay:                3000,
			numThumbs:            5,
			preloadAhead:         0,
			enableTopPager:       true,
			enableBottomPager:    true,
			enableHistory:        false,
			imageContainerSel:    '.imageContainer',
			captionContainerSel:  '.imageCaptionContainer',
			controlsContainerSel: '',
			titleContainerSel:    '',
			descContainerSel:     '',
			downloadLinkSel:      '',
			renderSSControls:     true,
			renderNavControls:    true,
			nextPageLinkText:     I18N.HOTELDETAILS_CAROUSEL_NEXTPG,
			prevPageLinkText:     I18N.HOTELDETAILS_CAROUSEL_PREVPG,
			onTransitionOut:      function(callback) {
				$('div.imageContainer').fadeOut('fast', callback);
			},
			onTransitionIn:       function() {
				if ($(".imageCaptionContainer .caption").length > 0) {
					$(".imageCaptionContainer").show();
				} else {
					$(".imageCaptionContainer").hide();
				}
				$('div.imageContainer').fadeIn('fast');
			}

		});

		if(typeof gallery !== undefined) {
			var items = gallery.find("ul.thumbs li");
			bp = (items.length > 5) ? "" : $.el("div").addClass("bottom").addClass("pagination");
			items.parent().after(bp);
		};
	};



	$.fn.sendToAFriendPopup = function() {
		if (!this.length) {return this;}
		var errorFn = function(w) {
			w.find('.sendToAFriend button').show();
			w.find('.sendToAFriendStatus').text(I18N.STAF_ERROR).show();
			w.find('.sendToAFriendThrobber').hide();
		};
		var $this = $(this);
		var onDialogOpened = function(w){
			w.find('form').ajaxForm({
				dataType: "html",
				beforeSubmit: function(formData, jqForm, options) {
					var valid = jqForm.valid();
					if (!valid) {
						w.find('.warningtxt').show();
						return false;
					}
					w.find('.warningtxt').hide();

					w.find('.sendToAFriend button').hide();
					w.find('.sendToAFriendStatus').hide();
					w.find('.sendToAFriendThrobber').show();
				},
				error: function() {
					errorFn(w);
				},
				success: function(html) {
					if (html.indexOf('errorLabel') !== -1) {
						errorFn(w);
						return;
					}
					w.find('form.sendToAFriend').slideUp("normal");
					var friendsEmail = document.getElementById('email.recipient').value;
					var sentStr = "&nbsp;<br/>Thanks, your email has been sent and your friend should receive it shortly.<br/>Sent to "+friendsEmail; //$(html).find('.sendToAFriend') doesn't work in IE
					w.find('.sendToAFriendResult').html(sentStr).slideDown("normal");
					$('.pipop-padding p:first').hide();
				}
			});
		};
		$this.dialognow($this, onDialogOpened, true);
		var onUnload = function(){
			//$this.unbind('change', onChange);
			//$this.unbind('result', onResult);
			//$this.unautocomplete();
			//onChange = onResult = acParse = null;
			$(window).unbind('beforeunload', onUnload);
		};
		$(window).bind('beforeunload', onUnload);
	};





	$.fn.formbuttontolink = function() {
		if (!this.length) {return this;}
		return this.each(function() {
			var $this = $(this);
			var link = $.el('a').attr({'href':'#','class':$this.attr('class')}).html($this.attr('value'));
			$this.after(link);
			link.click(function() {
				$this.parents('form').submit();
				return false;
			});
			$this.hide();
		});
	};

	$.fixJQM = function(w) {
		w.find('input, label, button').click(Utils.cancelBubbling); // Override jqm click handler for interactive elements
		w.find('.pipop-body').click(function(e) {
			if (e.target && e.target.tagName === 'A'){
				var link = e.target,
					href = link.href,
					isExternal = (href.indexOf(".premierinn.") > -1) ;

				if (!isExternal) {
					var hashPos = href.indexOf('#');
					// FIXME: Will fail if an external URL containing a hash is used
					if (hashPos!==-1) {
						var scrollToEl = $('a[name=' + href.substr(hashPos + 1) +']');
						$('.result').scrollTo(scrollToEl);
						return false;
					} else {
						Utils.cancelBubbling(e);
						return !window.open(href);
					}
				}

				// we havent preventDefault and the href is not javascript
				if (!e.isDefaultPrevented() && href.indexOf('javascript:') === -1){
					window.location = link.href;
					return true;
				}

			}
		});
	};



	/**
	 * Vertically center an element (popup modal) to the viewport
	 * If the element is taller than the window height absolute positioning is
	 * used so that the element will scroll with the docuemnt
	 *
	 * @param {boolean} animate				Animate to new position or move immediately? Defaults true
	 * @param {boolean} centerHorizontal	Center the element horizontally? Defaults true
	 * @param {boolean} centerVertical		Center the element vertically? Defaults true
	 *
	 * @chainable
	 */
	$.fn.centerInViewport = function (animate, centerHorizontal, centerVertical) {
		var POS_ABS = 'absolute',
			POS_FIX = 'fixed',
			$win = $(window),
			offset = this.offset(),
			docH = $('body').height();
			elH = this.height(),
			elW = this.width(),
			scrollTop = $win.scrollTop(),
			scrollLeft = $win.scrollLeft(),
			curLeft = offset.left - scrollLeft,
			curTop = offset.top - scrollTop,
			elBottom = offset.top + elH,
			winH = $win.height(),
			winW = $win.width(),
			posType = (this.css('position') === POS_FIX) ? POS_FIX : POS_ABS,
			newTop = (winH - elH) / 2,
			newLeft = Math.max((winW - elW) / 2, 0),
			animate = (animate !== false),
			centerHorizontal = (centerHorizontal !== false),
			centerVertical = (centerVertical !== false);

		// El height is greater that viewport height
		if (newTop < 0) {
			// Make sure the bottom of the element will fit on the page
			// otherwise shift it up til it does
			newTop = Math.min(docH - elBottom, 0);

			posType = POS_ABS;

			// Allow the element to scroll with the page
			this.css({
				position: POS_ABS,
				top: offset.top + 'px'
			});
		}

		// Don't bother repositioning downwards
		if (newTop >= curTop) {
			centerVertical = false;
		}

		if (!centerVertical) {
			newTop = curTop;
		}
		if (!centerHorizontal) {
			newLeft = curLeft;
		}

		if (posType === POS_ABS) {
			newTop += scrollTop;
			newLeft += scrollLeft;
		}

		if (animate) {
			this.animate({
				top: newTop,
				left: newLeft
			});
		} else {
			this.css({
				top: newTop + 'px',
				left: newLeft + 'px'
			});
		}
	};

	// Popup that appears without a click, for the timeout feature
	$.dialognow = {};
	$.fn.dialognow = function(sourceElement, callbackFunction, showClose, mainClass) {
		//explore.timerTask(['dialognow called',sourceElement] );
		if ($.dialognow.open){ return; }
		$.dialognow.open = true;

		if (!this.length) {return this;}
		if (showClose!==true) {showClose=false;}
		mainClass = (typeof mainClass === 'undefined') ? '' : mainClass;
		mainClass = (mainClass.length > 0) ? " " + mainClass : mainClass;
		// $(this) will be the button or link onto which the function is applied
		// sourceElement is the jQuery object in which to find HTML to inject into the container
		var POPUPSTART = '';
		POPUPSTART += '<div class="popup-content'+mainClass+'">';
		POPUPSTART += '	<div class="titlebar">';
		if (showClose) {
			POPUPSTART += '		<div class="piclose"><a href="#" class="jqmClose">'+I18N.POPUP_CLOSE+' X</a></div>';
		}
		POPUPSTART += '	</div>';
		POPUPSTART += '	<div class="pipop-body">';
		POPUPSTART += '		<div class="pipop-inner">';
		POPUPSTART += '			<div class="pipop-mask">';
		POPUPSTART += '				<div class="pipop-padding">';
		var POPUPEND = '';
		POPUPEND   += '				</div>';
		POPUPEND   += '			</div>';
		POPUPEND   += '		</div>';
		POPUPEND   += '	</div>';
		POPUPEND   += '</div>';

		var srcHTML = sourceElement.html();
		return $(this).each(function() {
			var d=$.el('div').
				attr({id:'pipopupcontainer'}).
				addClass('jqModal').
				addClass('pipopupbox');
			$('body').append(d);
			var $popup = $('#pipopupcontainer');

			$popup.bind('resized.popup', function (e) {
				$popup.centerInViewport(true, false, true);
			});

			$popup.html(POPUPSTART + srcHTML + POPUPEND);

			function onResize() {
				$popup.centerInViewport(false);
			}

			$popup.jqm({
				modal:!showClose,
				onShow:function(hash){
					var winHeight = window.innerHeight;
					var winWidth = window.innerWidth;
					if ((winHeight===undefined)&&(document.documentElement)) {
						winHeight = document.documentElement.clientHeight;
						winWidth = document.documentElement.clientWidth;
					}
					hash.w.css('left',Math.floor((winWidth-hash.w.width())/2)+'px');
					var top = Math.floor((winHeight-hash.w.height())/2);
					// If the dialog is taller than window height, make sure close button is visible
					// and allow dialog to scroll with page
					if (top < 0) {
						top = $(window).scrollTop();
						hash.w.css('position', 'absolute');
					}
					//explore.timerTask(["dialog top",top,"hash height",hash.w.height()]);
					if ($.browser.msie && (parseInt($.browser.version,10)===6)) {
						hash.w[0].topOffset = top;
					} else {
						hash.w.css('top',top+'px');
					}
					hash.o.hide().fadeIn("normal");
					var mask = hash.w.show().find('.pipop-mask').hide();
					setTimeout(function() {
						mask.slideUp(0).slideDown("normal");
					},10);
					sourceElement.html('.');
					$.fixJQM(hash.w);
					if (callbackFunction !== undefined) {
						callbackFunction(hash.w);
					}
					$(window).bind('resize', onResize);
				},
				onHide:function(hash){
					sourceElement.html(srcHTML);
					hash.w.find('.pipop-mask').slideUp("normal", function(){$popup.remove();});
					hash.o.fadeOut("normal", function(){hash.o.remove();});
					$('body').trigger('dialogClosed');

					$(window).unbind('resize', onResize);
					$.dialognow.open = false;
				}
			}).jqmShow();
			return false;
		});
	};

	/**
	 * HORRIBLE DUPLICATION. Couldn't come up with a better
	 * idea to fix the issue on AAB summary of amends lightbox.
	 * keep it unless you have a better solution.
	 */
	// Popup that appears without a click, for the timeout feature
	$.fn.dialognowforaab = function(sourceElement, callbackFunction, showClose, mainClass) {
		//explore.timerTask(['dialognow called',sourceElement] );

		if (!this.length) {return this;}
		if (showClose!==true) {showClose=false;}
		mainClass = (typeof mainClass === 'undefined') ? '' : mainClass;
		mainClass = (mainClass.length > 0) ? " " + mainClass : mainClass;
		// $(this) will be the button or link onto which the function is applied
		// sourceElement is the jQuery object in which to find HTML to inject into the container
		var POPUPSTART = '';
		POPUPSTART += '<div class="popup-content'+mainClass+'">';
		POPUPSTART += '	<div class="titlebar">';
		if (showClose) {
			POPUPSTART += '		<div class="piclose"><a href="#" class="jqmClose">'+I18N.POPUP_CLOSE+' X</a></div>';
		}
		POPUPSTART += '	</div>';
		POPUPSTART += '	<div class="pipop-body">';
		POPUPSTART += '		<div class="pipop-inner">';
		POPUPSTART += '			<div class="pipop-mask">';
		POPUPSTART += '				<div class="pipop-padding">';
		var POPUPEND = '';
		POPUPEND   += '				</div>';
		POPUPEND   += '			</div>';
		POPUPEND   += '		</div>';
		POPUPEND   += '	</div>';
		POPUPEND   += '</div>';

		var srcHTML = sourceElement.html();
		return $(this).each(function() {
			var d=$.el('div').
				attr({id:'pipopupcontainer'}).
				addClass('jqModal').
				addClass('pipopupbox');
			$('body').append(d);
			var $popup = $('#pipopupcontainer');
			$popup.html(POPUPSTART + srcHTML + POPUPEND);

			$popup.jqm({
				modal:!showClose,
				onShow:function(hash){
					var winHeight = window.innerHeight;
					var winWidth = window.innerWidth;
					if ((winHeight===undefined)&&(document.documentElement)) {
						winHeight = document.documentElement.clientHeight;
						winWidth = document.documentElement.clientWidth;
					}
					hash.w.css('left',Math.floor((winWidth-hash.w.width())/2)+'px');
					var top = Math.floor((winHeight-hash.w.height())/2);
					// If the dialog is taller than window height, make sure close button is visible
					// and allow dialog to scroll with page
					if (top < 0) {
						top = $(window).scrollTop();
						hash.w.css('position', 'absolute');
					}
					//explore.timerTask(["dialog top",top,"hash height",hash.w.height()]);
					if ($.browser.msie && (parseInt($.browser.version,10)===6)) {
						hash.w[0].topOffset = top;
					} else {
						hash.w.css('top',top+'px');
					}
					hash.o.hide().fadeIn("normal");
					var mask = hash.w.show().find('.pipop-mask').hide();
					setTimeout(function() {
						mask.slideUp(0).slideDown("normal");
					},10);
					// sourceElement.html('.');
					$.fixJQM(hash.w);
					if (callbackFunction !== undefined) {
						callbackFunction(hash.w);
					}

				},
				onHide:function(hash){
					sourceElement.html(srcHTML);
					hash.w.find('.pipop-mask').slideUp("normal", function(){$popup.remove();});
					hash.o.fadeOut("normal", function(){hash.o.remove();});
					$('body').trigger('dialogClosed');
				}
			}).jqmShow();
			return false;
		});
	};

	// Closure $popup
	$.fn.dialoginit = function(sourceElement, windowsize, callbackFunction) {
		if (!this.length) {return this;}

		// $(this) will be the button or link onto which the function is applied
		// sourceElement is the jQuery object in which to find HTML to inject into the container

		if (windowsize === undefined) {
			windowsize="normal";
		}

		var POPUPSTART = '';
		if (windowsize === 'wide'){
			POPUPSTART += '<div class="tandc-popup">';
		}
		POPUPSTART += '<div class="popup-content">';
		POPUPSTART += '	<div class="titlebar">';
		POPUPSTART += '		<div class="piclose"><a href="#" class="jqmClose">'+I18N.POPUP_CLOSE+' X</a></div>';
		POPUPSTART += '	</div>';
		POPUPSTART += '	<div class="pipop-body">';
		POPUPSTART += '		<div class="pipop-inner">';
		POPUPSTART += '			<div class="pipop-mask">';
		POPUPSTART += '				<div class="pipop-padding">';

		var POPUPEND = '';
		POPUPEND   += '				</div>';
		POPUPEND   += '			</div>';
		POPUPEND   += '		</div>';
		POPUPEND   += '	</div>';
		POPUPEND   += '</div>';
		if (windowsize === 'wide'){
			POPUPEND   += '</div>';
		}


		var srcHTML = sourceElement.html();

		return this.click(function(e) {
			e.preventDefault();
			var d=$.el('div').
				attr({id:'pipopupcontainer'}).
				addClass('jqModal').
				addClass('pipopupbox');
			if (windowsize === 'wide'){
				d.addClass('pipopupbox-wide');
			}

			$('body').append(d);
			var $popup = $('#pipopupcontainer');
			$popup.html(POPUPSTART + srcHTML + POPUPEND);
			$popup.jqm({
				modal:false,
				onShow:function(hash){
					var winHeight = window.innerHeight;
					var winWidth = window.innerWidth;
					if ((winHeight===undefined)&&(document.documentElement)) {
						winHeight = document.documentElement.clientHeight;
						winWidth = document.documentElement.clientWidth;
					}
					hash.w.css('left',Math.floor((winWidth-hash.w.width())/2)+'px');
					var top = Math.floor((winHeight-hash.w.height())/2);
					if ($.browser.msie && (parseInt($.browser.version,10)===6)) {
						hash.w[0].topOffset = top;
					} else {
						hash.w.css('top',top+'px');
					}
					hash.o.hide().fadeIn("normal");
					var mask = hash.w.show().find('.pipop-mask').hide();
					setTimeout(function() {
						mask.slideUp(0).slideDown("normal");
					},10);
					sourceElement.html('.');
					$.fixJQM(hash.w);
					if (callbackFunction !== undefined) {
						callbackFunction(hash.w);
					}
				},
				onHide:function(hash){
					sourceElement.html(srcHTML);
					hash.w.find('.pipop-mask').slideUp("normal", function(){$popup.remove();});
					hash.o.fadeOut("normal", function(){hash.o.remove();});
				}
			}).jqmShow();
			return false;
		});
	};




	/*
	 *  Reverse integrated promos
	 */
	$.fn.getPromoJSON = function(options) {
		if (!this.length) {return this;}
		var defaults = {
			urls: {fallback1:"../../assets/js/parkflypackages.json-5.html"},
			className: "leftnavpod3"
		};

		var opts = $.extend(defaults, options);

		// Private function for returning one promo from the entire object
		function getLatestPromo(promoJSON) {

			var ret = false;
			var startDate = new Date();
			var endDate = new Date();
			var today = new Date();
			var s = [];
			var e = [];

			// grab the default promo
			try {

				s = promoJSON.defaultPromo.startDate.split("/");
				e = promoJSON.defaultPromo.endDate.split("/");

				startDate.setFullYear(s[2],s[1]-1,s[0]);
				endDate.setFullYear(e[2],e[1]-1,e[0]);

				if ((startDate < today) && (today < endDate)) {ret = promoJSON.defaultPromo;}

			} catch(err) {}

			// check to find any override of the default
			$.each(promoJSON.list, function(i,val){
				// defend against the inadequacies of the JSON from CQ
				// Knock out the first and last items in the list...
				if ((typeof this.ie === "undefined") && (i !== 0)) {
					s = this.startDate.split("/");
					e = this.endDate.split("/");

					startDate.setFullYear(s[2],s[1]-1,s[0]);
					endDate.setFullYear(e[2],e[1]-1,e[0]);

					if ((startDate < today) && (today < endDate)) {ret = this;}
				}
			});

			return ret;
		}

		return this.each(function() {
			var $this = $(this);

			// build element specific options, support metadata plugin
			var o = ($.fn.metadata) ? $.extend({}, opts, $this.metadata()) : opts;

			$.each(o.urls, function(name,url) /* each url in urls */ {
				$.ajax({
					url: url,
					error: function(url) {
						// no break here - continue for next one
					},
					success: function(json) {
						var thisPromo = getLatestPromo(json);

						try {
							var title = thisPromo.title.replace(/`/g,"'");
							var	text = thisPromo.body.replace(/`/g,"'");
							var modal = "";
							if (typeof thisPromo.modal !== 'undefined'){
								modal = thisPromo.modal.replace(/`/g,"'");
							}
							var imgHTML = $.el('img').attr({
								'src':thisPromo.image.url,
								'width':thisPromo.image.width,
								'height':thisPromo.image.height,
								'alt':thisPromo.image.alt
							});
							var	a = Math.floor(Math.random() * 10000000000);
							var	uid = "jpro-"+parseInt(a,10);
							var	dest = thisPromo.url;
							var	pD = $.el('div').attr("id",uid).addClass(o.className);
							var	pA = $.el('a').attr("href",dest);
							var	pWa = $.el('div').addClass("whitearrow");
							var	pH = $.el('p').addClass("header");
							var	pB = $.el('p').html(pA);

							// add the promo container
							$this.append(pD);

							// build the promo
							$('#'+uid).
								html(imgHTML).
								find('img').
								after(pB).
								after(pH).
								after(pWa);
							$('img','#'+uid).wrap(pA);
							$('p','#'+uid).html(pA);
							$('p.header a','#'+uid).html(title);
							$('p:not(.header) a','#'+uid).html(text);

							if (modal.length > 0) {

								// append the modal content if it exists
								var md = $.el('div').addClass('promopopupcontent');
								$this.append(md.html(modal));

								// hook in plugin, if required
								$('a','#'+uid).dialoginit($('.promopopupcontent:first',$this));
							}

						} catch(err) {}
					}
				});
			});
		});
	};





	$.fn.slideUpWithTick = function(duration, endCallback, stepCallback) {
		var $this = $(this);
		$this.animate({height:'1px'}, {duration:duration, complete:function(){
			$this.hide();
			if (endCallback !== undefined) {endCallback();}
			stepCallback();
		}, step:stepCallback});
	};





	$.fn.slideDownWithTick = function(duration, endCallback, stepCallback) {
		var $this = $(this);
		$this.show().height('auto');
		var h = $this.height();
		$this.height('1px').animate({height:h}, {duration:duration, complete:function(){
			if (endCallback !== undefined) {endCallback();}
			stepCallback();
		}, step:stepCallback});
	};

	/**
	 * jQuery.fn.exploresort
	 * --------------
	 * @author James Padolsey (http://james.padolsey.com)
	 * @version 0.1
	 * @updated 18-MAR-2010
	 * --------------
	 * @param Function comparator:
	 *   Exactly the same behaviour as [1,2,3].sort(comparator)
	 *
	 * @param Function getSortable
	 *   A function that should return the element that is
	 *   to be sorted. The comparator will run on the
	 *   current collection, but you may want the actual
	 *   resulting sort to occur on a parent or another
	 *   associated element.
	 *
	 *   E.g. $('td').sort(comparator, function(){
	 *      return this.parentNode;
	 *   })
	 *
	 *   The <td>'s parent (<tr>) will be sorted instead
	 *   of the <td> itself.
	 */
	jQuery.fn.exploresort = (function(){

		var sort = [].sort;

		return function(comparator, getSortable) {

			getSortable = getSortable || function(){return this;};

			var placements = this.map(function(){

				var sortElement = getSortable.call(this),
					parentNode = sortElement.parentNode,

					// Since the element itself will change position, we have
					// to have some way of storing it's original position in
					// the DOM. The easiest way is to have a 'flag' node:
					nextSibling = parentNode.insertBefore(
						document.createTextNode(''),
						sortElement.nextSibling
					);

				return function() {

					if (parentNode === this) {
						throw new Error(
							"You can't sort elements if any one is a descendant of another."
						);
					}

					// Insert before flag:
					parentNode.insertBefore(this, nextSibling);
					// Remove flag:
					parentNode.removeChild(nextSibling);

				};

			});

			return sort.call(this, comparator).each(function(i){
				placements[i].call(getSortable.call(this));
			});

		};

	})();

	/**
	 * Apply to all button.wrapped elements in order for them to receive rollover states
	 */
	$.fn.ctabutton = function() {

		var $t = $(this);

		if (!this.length) {return this;}

		return this.each(function(){

			$(this).closest('.button-rounded').mouseover(function(){
				$(this).addClass("button-roundedActive");
			}).mouseout(function(){
				$(this).removeClass("button-roundedActive");
			});
		});
	};

	/**
	 * Apply to a link with href=# to inject the STAF DOM for the sharebar and enable your click event
	 */
	$.fn.stafinject = function() {

		var $this = $(this),
		DOMArr = [];

		DOMArr.push('<div class="sendToAFriend">');
		DOMArr.push('	<h2>Email page to a friend</h2>');
		DOMArr.push('	<p>Details marked with an asterisk * must be completed.</p>');
		DOMArr.push('	<form id="emailToFriend" onsubmit="return true;" action="/sea/en/emailToFriend!execute.action" method="post" class="sendToAFriend">');
		DOMArr.push('		<fieldset>');
		DOMArr.push('			<span class="stafInfo"></span>');
		DOMArr.push('		</fieldset>');
		DOMArr.push('		<fieldset style="display:none" class="insertfields"></fieldset>');
		DOMArr.push('		<fieldset class="bordered">');
		DOMArr.push('			<div class="warningtxt" style="display:none">');
		DOMArr.push('				<div class="wt-tl"></div>');
		DOMArr.push('				<div class="wt-tr"></div>');
		DOMArr.push('				<div class="wtinside">');
		DOMArr.push('					<div class="errorLabel">Please check and fill the fields required</div>');
		DOMArr.push('				</div>');
		DOMArr.push('				<div class="wt-bl"></div>');
		DOMArr.push('				<div class="wt-br"></div>');
		DOMArr.push('			</div>');
		DOMArr.push('			<div id="wwgrp_email.senderFirstName" class="wwgrp">');
		DOMArr.push('				<div id="wwlbl_email.senderFirstName" class="wwlbl">');
		DOMArr.push('					<label  for="email.senderFirstName" class="label">Your first name *:</label>');
		DOMArr.push('				</div>');
		DOMArr.push('				<br />');
		DOMArr.push('				<div id="wwctrl_email.senderFirstName" class="wwctrl">');
		DOMArr.push('					<input type="text" name="email.senderFirstName" value="" id="email.senderFirstName" class="required nicetext" style="width:200px"/>');
		DOMArr.push('				</div>');
		DOMArr.push('			</div>');
		DOMArr.push('			<div id="wwgrp_email.senderLastName" class="wwgrp">');
		DOMArr.push('				<div id="wwlbl_email.senderLastName" class="wwlbl">');
		DOMArr.push('					<label  for="email.senderLastName" class="label">Your last name*:</label>');
		DOMArr.push('				</div>');
		DOMArr.push('				<br />');
		DOMArr.push('				<div id="wwctrl_email.senderLastName" class="wwctrl">');
		DOMArr.push('					<input type="text" name="email.senderLastName" value="" id="email.senderLastName" class="required nicetext" style="width:200px"/>');
		DOMArr.push('				</div>');
		DOMArr.push('			</div>');
		DOMArr.push('			<div id="wwgrp_email.sender" class="wwgrp">');
		DOMArr.push('				<div id="wwlbl_email.sender" class="wwlbl">');
		DOMArr.push('					<label  for="email.sender" class="label">Your email address *:</label>');
		DOMArr.push('				</div>');
		DOMArr.push('				<br />');
		DOMArr.push('				<div id="wwctrl_email.sender" class="wwctrl">');
		DOMArr.push('					<input type="text" name="email.sender" value="" id="email.sender" class="required email" style="width:200px"/>');
		DOMArr.push('				</div>');
		DOMArr.push('			</div>');
		DOMArr.push('			<div id="wwgrp_email.recipientName" class="wwgrp">');
		DOMArr.push('				<div id="wwlbl_email.recipientName" class="wwlbl">');
		DOMArr.push('					<label  for="email.recipientName" class="label">Your friend&rsquo;s name *:</label>');
		DOMArr.push('				</div>');
		DOMArr.push('				<br />');
		DOMArr.push('				<div id="wwctrl_email.recipientName" class="wwctrl">');
		DOMArr.push('					<input type="text" name="email.recipientName" value="" id="email.recipientName" class="required nicetext" style="width:200px"/>');
		DOMArr.push('				</div>');
		DOMArr.push('			</div>');
		DOMArr.push('			<div id="wwgrp_email.recipient" class="wwgrp">');
		DOMArr.push('				<div id="wwlbl_email.recipient" class="wwlbl">');
		DOMArr.push('					<label  for="email.recipient" class="label">Your friend&rsquo;s email address *:</label>');
		DOMArr.push('				</div>');
		DOMArr.push('				<br />');
		DOMArr.push('				<div id="wwctrl_email.recipient" class="wwctrl">');
		DOMArr.push('					<input type="text" name="email.recipient" value="" id="email.recipient" class="required email" style="width:200px"/>');
		DOMArr.push('				</div>');
		DOMArr.push('			</div>');
		DOMArr.push('			<div id="wwgrp_email.personalMessage" class="wwgrp">');
		DOMArr.push('				<div id="wwlbl_email.personalMessage" class="wwlbl">');
		DOMArr.push('					<label  for="email.personalMessage" class="label">A short message:</label>');
		DOMArr.push('				</div>');
		DOMArr.push('				<br />');
		DOMArr.push('				<div id="wwctrl_email.personalMessage" class="wwctrl">');
		DOMArr.push('					<textarea name="email.personalMessage" cols="35" rows="4" id="email.personalMessage"></textarea>');
		DOMArr.push('				</div>');
		DOMArr.push('			</div>');
		DOMArr.push('		</fieldset>');
		DOMArr.push('		<fieldset class="keepInformed bordered">');
		DOMArr.push('			Please keep me informed about Premier Inn news in the following countries:');
		DOMArr.push('			<div id="wwgrp_newsletter_regionPreferences" class="wwgrp">');
		DOMArr.push('				<div id="wwctrl_newsletter_regionPreferences" class="wwctrl">');
		DOMArr.push('					<input type="checkbox" name="newsletter.regionPreferences" value="1" id="newsletter.regionPreferences-1" checked="checked"/>');
		DOMArr.push('					<label for="newsletter.regionPreferences-1" class="checkboxLabel">UK &amp; Ireland</label>');
		DOMArr.push('					<input type="checkbox" name="newsletter.regionPreferences" value="2" id="newsletter.regionPreferences-2"/>');
		DOMArr.push('					<label for="newsletter.regionPreferences-2" class="checkboxLabel">Dubai</label>');
		DOMArr.push('					<input type="checkbox" name="newsletter.regionPreferences" value="3" id="newsletter.regionPreferences-3"/>');
		DOMArr.push('					<label for="newsletter.regionPreferences-3" class="checkboxLabel">India</label>');
		DOMArr.push('				</div>');
		DOMArr.push('			</div>');
		DOMArr.push('		</fieldset>');
		DOMArr.push('		<p class="sendToFriendPrivacy"><a href="/pi/en/privacy.html" onclick="this.target=\'_blank\'">Privacy Policy</a></p>');
		DOMArr.push('		<fieldset style="float:right">');
		DOMArr.push('			<button type="submit" class="book-map-search-button">Send</button>');
		DOMArr.push('			<span class="sendToAFriendThrobber"><img src="/assets/images/throbber.gif" alt=""/></span>');
		DOMArr.push('			<span class="sendToAFriendStatus"></span>');
		DOMArr.push('		</fieldset>');
		DOMArr.push('		<div class="clearfix"></div>');
		DOMArr.push('	</form>');
		DOMArr.push('	<div class="sendToAFriendResult"></div>');
		DOMArr.push('</div>');

		var inj = "";

		$(DOMArr).each(function(){
			inj+=this;
		});

		$('body').append($.el('div').addClass('htmlLibrary').html(inj));

		var eType = $.el('input').attr({
				type:'hidden',
				name:'emailType',
				value:'news'
			}),
			pathname = document.location.pathname,
			pUS = $.el('input').attr({
				type:'hidden',
				name:'pageUrlSuffix',
				value:pathname
			});

		$('.htmlLibrary .sendToAFriend .insertfields').append(eType).append(pUS);

		$('.sendToAFriendThrobber').hide();

		$this.click(function(){
			$('div.sendToAFriend').sendToAFriendPopup();
			return false;
		});

		return this;

	};


	/**
	 * Apply to any <a> element for it to receive the sharing overlay popup.
	 */
	 $.fn.pagelinkoverlay = function(linkAddress) {

		var $this = $(this);

		if (!this.length) {return this;}

		if (!linkAddress) {return this;}


		return this.each(function(){

			if ($('#link-container').length < 1) {

				var container = $.el('div').addClass('link-container').attr('id','link-container'),
					closediv = $.el('div').addClass('close'),
					topdiv = $.el('div').addClass('top'),
					btmdiv = $.el('div').addClass('btm'),
					main = $.el('div').addClass('main clearfix'),
					title = $.el('h3').html(I18N.SOCIAL.LINK_TITLE),
					titleEnc = encodeURI(document.title).replace(/ /g,'%20'),
					urlEnc = (linkAddress),
					mask = $.el('div').addClass('mask');



				var boxContent = $.el('input').attr({
					type:'text',
					value:urlEnc,
					id:'pageLinkInp'
				});

				$('body').append(container.
									append(closediv).
									append(topdiv).
									append(main.
										append(title).append(boxContent)
									).
									append(btmdiv).hide());


				// add click event behaviour to target link
				$this.click(function(){

					var origin = $(this).offset(),
						width = $(this).width(),
						height = $(this).height();

					var newOffset = {};

					newOffset.top = origin.top + (height/2) - 122;
					newOffset.left = origin.left + (width/2) - 128;

					$('.mask').show();
					$('#link-container').css({
						'top':(newOffset.top),
						'left':(newOffset.left),
						'position':'absolute',
						'z-index':'2000'
					}).fadeIn('slow');

					return false;

				});

				if ($('.mask').length < 1) {
					$('body').append(mask);
				}

				// Add close behaviour to mask
				$('.mask').click(function(){
					$('#link-container').fadeOut('fast');
					$(this).hide();
				});
			}
		});

	 };

	/**
	 * Apply to any <a> element for it to receive the sharing overlay popup.
	 */
	$.fn.sharelinkoverlay = function(objectName) {

		var $this = $(this);

		if (!this.length) {return this;}


		objectName = (typeof objectName === 'undefined') ? "" : objectName;

		var tS = (I18N.SOCIAL.TITLE).replace(/\{o\}/g,objectName);

		return this.each(function(){

			// build the overlay if it doesn't already exist
			if ($('#share-container').length < 1) {

				var container = $.el('div').addClass('share-container').attr('id','share-container'),
					topdiv = $.el('div').addClass('top'),
					closediv = $.el('div').addClass('close'),
					btmdiv = $.el('div').addClass('btm'),
					main = $.el('div').addClass('main clearfix'),
					title = $.el('h3').html(tS),
					ulleft = $.el('ul').addClass('left'),
					ulright = $.el('ul').addClass('right'),
					titleEnc = encodeURI(document.title).replace(/ /g,'%20'),
					urlEnc = encodeURIComponent(document.location.href),
					mask = $.el('div').addClass('mask');


				var shareslist = [
					{
						className: "fb",
						innerText: I18N.SOCIAL.FACEBOOK,
						link: "http://www.facebook.com/sharer.php?u={u}&t={t}"
					},
					{
						className: "tw",
						innerText: I18N.SOCIAL.TWITTER,
						link: "http://twitter.com/share?url={u}&via=premierinn&text={t}"
					},
					{
						className: "fv",
						innerText: I18N.SOCIAL.FAVOURITE,
						link: "javascript:xbAddFavorite('{u}','{t}',this)"
					},
					{
						className: "ig",
						innerText: I18N.SOCIAL.IGOOGLE,
						link: "https://www.google.com/bookmarks/mark?op=add&bkmk={u}&title={t}"
					},
					{
						className: "dl",
						innerText: I18N.SOCIAL.DELICIOUS,
						link: "http://del.icio.us/post?url={u}&title={t}"
					},
					{
						className: "su",
						innerText: I18N.SOCIAL.STUMBLEUPON,
						link: "http://www.stumbleupon.com/submit?url={u}&title={t}"
					},
					{
						className: "dg",
						innerText: I18N.SOCIAL.DIGG,
						link: "http://digg.com/submit?url={u}&title={t}"
					},
					{
						className: "rd",
						innerText: I18N.SOCIAL.REDDIT,
						link: "http://reddit.com/submit?url={u}&title={t}"
					}
				];

				window.xbAddFavorite = function(url,title,elem){

					// Always override input values?
					title = window.title;
					url = document.location.href;

					if (window.sidebar) {
						window.sidebar.addPanel(title, url,"");
					} else if( window.external ) {
						window.external.AddFavorite( url, title); }
					else if (window.opera && window.print) {
						elem.setAttribute('href',url);
						elem.setAttribute('title',title);
						elem.setAttribute('rel','sidebar');
						elem.click();
					}


				};

				// add to DOM - multiple appends may be slow, consider improving.
				$('body').append(container.
									append(closediv).
									append(topdiv).
									append(main.
										append(title).
										append(ulleft).
										append(ulright)
									).
									append(btmdiv).hide());

				if ($('.mask').length < 1) {
					$('body').append(mask);
				}

				$('.close','#link-container').live('click',function(){
					$('.mask').click();
				});

				// Add close behaviour to mask
				// FIXME: this should only be added once. Not in every return iteration.
				// Although we normally only have a collection of one element in length.
				$('.mask').click(function(){
					$('#share-container').fadeOut('fast');
					$(this).hide();
				});

				$('.close','#share-container').live('click',function(){
					$('.mask').click();
				});

				$(shareslist).each(function(i){

					var myHref = this.link.
									replace(/{u}/gi,urlEnc).
									replace(/{t}/gi,titleEnc),
						dest = (i < 4) ? ulleft : ulright,
						myel = $.el('li').
								addClass(this.className).
								html($.el('a').
									html(this.innerText).
									attr('href',myHref));

					dest.append(myel);
				});

				// Check if we support adding bookmarks and hide if not
				if (!(window.sidebar) && !(window.external) && !(window.opera && window.print) ) {
					$('li.fv','#share-container').remove();
					window.xbAddFavorite = null;
				}

				// append click events to the links.
				$('a',container).live('click',function(){
					// Lyndsay Lohan in a Porsche
					if (this.href.indexOf('javascript') < 0) {
						return !window.open(this.href,'shareWin','status=0,menubar=0,location=0,width=600,height=400');
					} else {
						return true;
					}
				});

			}

			// add click event to each element in the selector set

			$(this).click(function(){

				var origin = $(this).offset(),
					width = $(this).width(),
					height = $(this).height();

				var newOffset = {};

				newOffset.top = origin.top + (height/2) - 170;
				newOffset.left = origin.left + ( width/2 - 128 );

				$('.mask').show();
				$('#share-container').css({
					'top':(newOffset.top),
					'left':(newOffset.left),
					'position':'absolute',
					'z-index':'2000'

				}).fadeIn('slow');

				return false;

			});

		});

	};

	/**
	 *
	 */
	$.fn.roundedcorners = function(corners) {

		var $this = $(this);

		if (!this.length) {return this;}

		if (typeof corners !== "object" || corners.length < 1) {
			corners = ['tl','tr','bl','br'];
		}

		var rcH = $.el('span');
		$.each(corners, function(key,val){
			rcH.prepend($.el('span').addClass(val));
		});

		return this.each(function() {

			$(this).prepend(rcH.html());

		});

	};


	$.fn.tooltipinit = function() {

		// Don't do the binds if we've got no triggers in-page...
		if (!$('.tooltip-link','#body-inner').length) { return; }

		var closeExtrasPopup = function(){
			$('.tooltip').fadeOut(200, function() {
				$(this).remove();
			});
		};

		$('.tooltip-close').live('click',function(){
			$(this).closest('.tooltip').fadeOut(200,function(){
				$(this).remove();
			});
			return false;
		});

		$('.tooltip-link').live('click', function( e ) {

			var existingTip = $('.tooltip')

			if (existingTip.length) {
				closeExtrasPopup();
			}

			var $el = $(this);
			//if ( !$el.length ) { return; }

			var iconPosition = $el.offset(),
			 		iconPositionleft = iconPosition.left,
					iconPositiontop = iconPosition.top;

			var bodyText = $el.attr('alt');

			var name = $el.attr('name');
			if (name) {
				var ttElSelector = 'input[name="cqtt' + name + '"]';
				var $ttEl = $(ttElSelector);
				if ($ttEl.length) {
					bodyText = $ttEl.val();
				}
			}

			//

			$("#tooltip").tmpl({bodyText:bodyText})
				.appendTo('body')
				.css({'left' : ( iconPositionleft + 15) + 'px', 'top' : ( iconPositiontop - 20) + 'px'})
				.fadeIn(200);


			return false;
		});

		$(document).bind("click", function(e){
			var _target = $(e.target),
			tooltipSelector = ".tooltip";
			if( !_target.hasClass("tooltipSelector") &&
				!_target.hasClass("tooltip-link") &&
				_target.parents(tooltipSelector).length <= 0) {
				closeExtrasPopup();
			}
		});
	};


	$.fn.dcCheckbox = function() {
	// augment the standard booking form with dynamic calendar elements
		return this.each(function() {
			var obj = $(this),
				d2 = $.el("div"),
				l2 = $.el("label"),

			input2 = $.el("input").attr({
						"type":"checkbox",
						"name":"bookingoption",
						"value":"explorecalendar",
						"class":"fsFlex",
						"onClick":"sc_trackDCC(this);"
					});

			obj.css("visibility", "visible").append(d2);

			l2.append(input2);
			d2.append(l2);
			l2.append("Dates flexible? (Find best price)");


			$('input','.home-radios').live('change',function(){
				var $frm = $(this).closest('form'),
					$fs = $(this).closest('fieldset'),
					seed = $('input:checked',$fs).val(),
					note = $('.booking-note',$frm),
					flower = note.next('div'),
					refine = $('.search-chk-col, h2.refine',$frm),
					input = $('#sideBarSubmit',$frm),
					footnote = $('.children_beds', $frm);

				if (seed === 'explorecalendar') {
					footnote.slideUp("slow");
					flower.slideUp("slow");
					note.slideDown("slow").show(function(){
						$(this).show();
					});
					refine.slideUp("slow");
					input.slideUp("slow");
				} else {
					footnote.slideDown("slow");
					note.slideUp("slow");
					flower.slideDown("slow");
					refine.slideDown("slow");
					input.slideDown("slow");
				}
				return true;
			});

			$.fn.controlDcCheckbox();
		});
	};

	$.fn.controlDcCheckbox = function() {
		var defaultInput = $('.availability-form-tick-box-flags input[name="defaultTickBox"]');
		var disableInput = $('.availability-form-tick-box-flags input[name="disableTickBox"]');

		if(defaultInput.length > 0 && defaultInput.val() === "true") {
			$('input.fsFlex').attr("checked", "checked");
			$('input','.home-radios').change();
		}

		if(disableInput.length > 0 && disableInput.val() === "true") {
			$('input.fsFlex').bind('click', function (e) {
					e.preventDefault();
			});
			$('.home-radios').die('change');
		}
	};

	$.fn.dcCheckboxHome = function() {
		this.each(function() {

			var obj = $(this),
				d2 = $.el("div"),
				l2 = $.el("label").attr("for", "fsFlex"),
				input2 = $.el("input").attr({
					type: "checkbox",
					name: "bookingoption",
					value: "explorecalendar",
					id: "fsFlex",
					className: "fsFlex",
					onClick: "sc_trackDCC(this)",
					checked: "true"
				});
			obj.css("visibility", "visible");
			obj.append(d2);
			d2.html(input2);
			d2.append(l2);
			l2.append("Dates flexible? (Find best price)");

			$('.home-radios').live('change', function() {
				var $this = $(this);
				var seed = $('input:checkbox:checked', this).val();
				var flower = $('.secondary fieldset, .secondary select,	.secondary h3, #lhSearch_1, .secondary h4, #bookHotelCheckAvailability_1, .lhmenu-btm.print-not, #lhSearch .lhmenu-btm, #hotelDetailsCheckAvailability-LH_1, .secondary .depart-date, .quick-home-footnote, #search_1'),
				note = $('.booking-note');
				if (seed === 'explorecalendar') {
					$(flower).fadeTo("slow", 0);
					$(".secondary select").delay(100).queue(function(a) {
						$(this).hide();
						a();
					});
					$("#lhSearch_1").hide().attr('disabled', 'disabled').css('cursor', 'default');
					$(note).fadeTo("slow", 1);
				} else {
					$(flower).fadeTo("slow", 1);
					note.fadeTo("slow", 0);
					$(".secondary select").show();
					$("#lhSearch_1").show();
					$("#lhSearch_1").removeAttr('disabled').css('cursor', 'hand');
					note.css('display', 'none');
				}
			});
		});

		$.fn.controlDcCheckbox();

		return this;
	};

})(jQuery);
