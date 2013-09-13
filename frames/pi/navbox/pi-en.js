(function (A) {
	window.PI = window.PI || {};
	A.extend(window.PI, {
		utils: {},
		ciol: {
			viewModels: {}
		},
		components: {},
		viewModels: {},
		ko: {},
		omniture: {},
		loaded: function () {
			document.documentElement.className = document.documentElement.className.split("ko-loading").join("ko");
			return this
		},
		ready: function () {
			PI.components.forms.init();
			PI.components.dialog.init();
			PI.components.back_link.init()
		}
	});
	A(A.proxy(window.PI.ready, window.PI))
})(jQuery);
var I18N = {
	MAPKEY_SEARCH: "Your search",
	MAPKEY_OFFER: "Premier Inn Day Out",
	MAPKEY_BOOKABLE: "Premier Inn",
	MAPKEY_AVAILABLE: "Available",
	MAPKEY_NONSS: "Other room types available",
	MAPKEY_OPENINGSOON: "Opening soon",
	MAPKEY_UNAVAILABLE: "Not available",
	SOCIAL: {
		TITLE: "Share/save these {o} details",
		LINK_TITLE: "Copy &amp; Paste a link to this page",
		FACEBOOK: "Facebook",
		DELICIOUS: "Delicious",
		TWITTER: "Twitter",
		STUMBLEUPON: "StumbleUpon",
		FAVOURITE: "Favourites",
		DIGG: "Digg",
		IGOOGLE: "Google",
		REDDIT: "Reddit"
	},
	CURRENCY: {
		EUR: "&euro;",
		GBP: "&pound;"
	},
	VALIDATION: {
		GENERAL: "Please correct the errors below",
		T_AND_C: "You must agree to the terms and conditions",
		EMAIL: "Your email address is required",
		PASSWORD: "You must enter your password",
		TEXT_CONFIRMATION: "Please enter a mobile number to receive text message confirmation"
	},
	TOASTS: {
		INFO_OFFERS: "Zoom in closer to show offers",
		INFO_AVAIL: "Zoom in closer to auto-check hotel availability",
		MSVEROUTE: "Fetching route data...",
		NEARROUTE: "Fetching hotels near route...",
		ALLHOTELS: "Fetching hotel list...",
		ALLHOTELS_SHOW: "Preparing hotel list...",
		HOTELINFO: "Fetching hotel information...",
		OFFERS: "Fetching Premier Inn Days Out...",
		OFFERS_SHOW: "Preparing Premier Inn Days Out...",
		OFFERINFO: "Fetching Premier Inn Day Out information...",
		AVAILABILITY: "Fetching availability..."
	},
	TIMEOUT_POPUP: {
		GENERAL: {
			INFO_MESSAGE_LOGGEDIN: "Thank you, you are now logged in again.",
			INFO_MESSAGE_PASSWORD: "Thank you, please check your email for your login details",
			ERROR_REQUEST: "A problem was encountered, please try again.",
			ERROR_RESPONSE: "Your details appear to be incorrect, please try again.",
			ERROR_NO_USERNAME: "Username invalid",
			ERROR_NO_PASSWORD: "Please enter your password"
		},
		EMAIL: {
			LEGEND: "Session timed out",
			TITLE: "Session timed out",
			MESSAGE: "Your session has timed out.<br />Please re-enter your password to continue:",
			USERNAME: "Username",
			PASSWORD: "Password",
			FORGOTTEN: "Forgotten your password",
			CLOSE: "Close",
			SUBMIT: "Submit"
		},
		TINA: {
			LEGEND: "Session timed out",
			TITLE: "Session timed out",
			MESSAGE: "Your session has timed out.<br />Please re-enter your PIN Code to continue:",
			TELEPHONE: "Telephone",
			PINCODE: "PIN Code",
			FORGOTTEN: "Forgotten your PIN Code?",
			CLOSE: "Close",
			SUBMIT: "Submit"
		}
	},
	CLUSTER_TOOLTIP_PREFIX_HTML: "",
	CLUSTER_TOOLTIP_SUFFIX_HTML: " hotels in this area<br/><b>Click to zoom in</b>",
	HOTEL_TOOLTIP_PREFIX_HTML: "",
	HOTEL_TOOLTIP_SUFFIX_HTML: "<br/><b>Click for information</b>",
	CAL_DAY_INITIALS: ["S", "M", "T", "W", "T", "F", "S"],
	DAY_NAMES: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	SHORT_DAY_NAMES: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	MONTH_NAMES: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	FULL_MONTH_NAMES: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	SELECT_ARRIVAL_DATE: "Select an arrival date",
	SELECT_EVENT_DATE: "Select date of event",
	SELECT_MEETING_DATE: "Select date of meeting",
	DATE_IN_PAST: "The date you selected is in the past - please select a valid arrival date",
	TOO_FAR_AHEAD: "Please select a date less than one year from now",
	POPUP_CLOSE: "Close",
	RTYPE_SINGLE: "Single",
	RTYPE_TWIN: "Twin",
	RTYPE_DOUBLE: "Double",
	RTYPE_FAMILY: "Family",
	RTYPE_DISABLED: "Disabled",
	RATECLASSIFICATION: {
		A: "Premier Flexible",
		F: "Premier Saver*",
		B: "Bed & breakfast",
		C: "Meal deal",
		D: "8 days Sleep Park Fly",
		E: "15 days Sleep Park Fly",
		G: "4 days Sleep Park Fly"
	},
	HOTELDETAILS_CAROUSEL_NEXTPG: "Next page",
	HOTELDETAILS_CAROUSEL_PREVPG: "Previous Page",
	HOTELDETAILS_SHOWMORE: "More hotel details",
	HOTELDETAILS_HIDEMORE: "Hide hotel details",
	HOTELBUBBLE_INFOFAIL: "Sorry, there was an error loading information for this hotel",
	HOTELBUBBLE_AVAILFAIL: "Sorry, there was an error loading availability information for this hotel",
	HOTELBUBBLE_AVAILWIDGET_TITLE: "Check availability",
	HOTELBUBBLE_PACKAGESWIDGET_TITLE: "Packages available",
	HOTELBUBBLE_BOOKBUTTON: "Book now",
	HOTELBUBBLE_BREAKDOWNLINK: "View price breakdown",
	HOTELBUBBLE_UNAVAILABLE: "Sorry, this hotel isn't able to fulfil your requirements on the date specified",
	HOTELBUBBLE_OPENINGSOON: "This hotel is opening soon",
	HOTELBUBBLE_BANDB: "Bed &amp; Breakfast",
	HOTELBUBBLE_DINNERBB: "Premier Inn Meal Deal",
	HOTELBUBBLE_PARKFLY: "Sleep Park Fly",
	HOTELBUBBLE_FULLOFFER: "Full package details",
	OFFERBUBBLE_INFOFAIL: "Sorry, there was an error loading information for this Premier Inn Day Out",
	GROUPBOOKING_HEAD: "Group booking request",
	GROUPBOOKING_BODY: "If you'd like to make a booking for more than 4 rooms then please fill in a group booking form request. To book 4 or less rooms, please press 'Cancel' to go back to the booking page.",
	GROUPBOOKING_CANCEL: "Cancel",
	GROUPBOOKING_GO: "Make group booking request",
	AUTOCOMPLETE_MILESFROM: "miles from",
	ROUTEINFO_START: "Start",
	ROUTEINFO_VIA: "Via",
	ROUTEINFO_END: "End",
	ROUTEINFO_MILES: "miles",
	ROUTEINFO_MILES_SHORT: "mi",
	ROUTEINFO_KM: "kilometres",
	ROUTEINFO_KM_SHORT: "km",
	HOURS: "hours",
	HOUR: "hour",
	MINS: "mins",
	MIN: "min",
	STAF_HOTEL: "Email hotel details to a friend",
	STAF_OFFER: "Email Premier Inn Day Out details to a friend",
	STAF_OFFERSEARCH: "Email Premier Inn Days Out search to a friend",
	STAF_SEARCH: "Email map search to a friend",
	STAF_ERROR: "Error",
	POSTCODE_LOOKUP_FAIL: "Not found",
	POSTCODE_LOOKUP_SUCCESS: "Found",
	POSTCODE_LOOKUP_CHOOSE_ONE: "Please select from the list",
	POSTCODE_LOOKUP_MUST_CHOOSE_ONE: "Please select an address",
	POSTCODE_LOOKUP_NONE_OF_THE_ABOVE: "Please enter your address details manually, or try finding your address again",
	LAST: ""
};
(function (A) {
	A.ccDateValidation = function (F, B) {
		var G = A('input[name$="availabilityModel.selectedMonthAndYear"]').val();
		var K = (G.match(/(\d\d\d\d)(\d\d)/) || [0, 0])[1];
		var C = (G.match(/(\d\d\d\d)(\d\d)/) || [0, 0, 0])[2];
		C = parseInt(C, 10) - 1;
		var E = A('input[name$="availabilityModel.day"]').val();
		var H = A('input[name$="availabilityModel.nights"]').val();
		var J = new Date();
		J.setDate(E);
		J.setMonth(C);
		var L = new Date();
		L.setDate(parseInt(E, 10));
		L.setMonth(C);
		L.setYear(K);
		L.setDate(L.getDate() + parseInt(H, 10));
		var I = L.getMonth();
		var D = L.getFullYear();
		A("#card-end-year, #card-end-month").change(function () {
			var M = parseInt(A("#card-end-month option:selected").val(), 10);
			var N = parseInt(A("#card-end-year option:selected").val(), 10);
			if (!isNaN(N) && !isNaN(M)) {
				if (N < D) {
					if (F instanceof Function) {
						F()
					}
				} else {
					if (N === D && M < I) {
						if (F instanceof Function) {
							F()
						}
					} else {
						if (B instanceof Function) {
							B()
						}
					}
				}
			}
		})
	};
	A.postcodelookup = A.postcodelookup | {};
	A.fn.postcodelookup = function (B, C) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var G = A(this);
			G.after('<input class="postcodebutton" type="button" style="width:auto;float:left;" value="' + B + '" /><div class="postcodestatus" style="float:left; padding-top:5px; padding-left:5px"></div>');
			var F = G.parent().find(".postcodebutton"),
				D = G.parent().find(".postcodestatus"),
				H = F.closest("form"),
				E = A(".addressLookup-popup-content");
			if (H.find(".addressLine1").length > 1) {
				H = F.closest(".addressForm")
			}
			return F.click(function () {
				if (A.postcodelookup.looking) {
					return false
				}
				A.postcodelookup.looking = true;
				if (G.val() === "" || G.val().length < 3) {
					alert("Please enter a postcode");
					A(".AFpostcode").focus();
					A.postcodelookup.looking = false;
					return false
				}
				F.hide().blur();
				D.stop(true, true).show().html('<img src="' + CQ_ASSETS_URL + 'images/throbber.gif"/>');
				var I = A(".postcodenoneoftheabove");
				I.html("").hide();
				A.ajax({
					url: SWS_URL + "addressLookupService/addressForPostcode?postcode=" + escape(G.val()),
					error: function () {
						F.show();
						D.html(I18N.POSTCODE_LOOKUP_FAIL).fadeOut(10000);
						A.postcodelookup.looking = false
					},
					success: function (K) {
						F.show();
						if (!K.addresses || K.addresses.length === 0) {
							D.html(I18N.POSTCODE_LOOKUP_FAIL).fadeOut(10000)
						} else {
							D.html("");
							var J = A(".addressList select");
							J.html("").append('<option value="">' + I18N.POSTCODE_LOOKUP_CHOOSE_ONE + "</option>");
							A.each(K.addresses, function (L, M) {
								J.append('<option value="' + L + '">' + M.addressAsString + "</option>")
							});
							F.dialognow(E, function (L) {
								var M = L;
								A(".form-back-btn").click(function () {
									G.val("");
									L.jqmHide();
									I.html("<p>" + I18N.POSTCODE_LOOKUP_NONE_OF_THE_ABOVE + "</p>").show()
								});
								L.find("#addressLookupForm").submit(function () {
									var S = A(this);
									S.find("div.errorLabel").remove();
									var P = S.valid();
									if (P) {
										S.find(".error-container").html("");
										var O = A("#addresses :selected", this).val();
										var R = K.addresses[O];
										G.val("");
										H.find(".companyId").setOrEmptyVal(R.companyId).change();
										H.find(".companyName").setOrEmptyVal(R.companyName).change();
										H.find(".postcode").setOrEmptyVal(R.postcode).change();
										H.find(".addressLine1").setOrEmptyVal(R.addressLine1).change();
										H.find(".addressLine2").setOrEmptyVal(R.addressLine2).change();
										H.find(".addressLine3").setOrEmptyVal(R.addressLine3).change();
										H.find(".addressLine4").setOrEmptyVal(R.addressLine4).change();
										H.find(".addressLine5").setOrEmptyVal(R.addressLine5).change();
										H.find(".country").setOrEmptyVal(R.country).change();
										var Q = A('input[id*="addressTypeBUSINESS"]');
										var N = A('input[id*="addressTypeHOME"]');
										if (Q && N) {
											if (R.companyName.length > 0) {
												Q.click();
												Q.attr("checked", true);
												N.attr("checked", false)
											} else {
												N.click();
												Q.attr("checked", false);
												N.attr("checked", true)
											}
										}
										L.jqmHide();
										I.html("").hide();
										if (typeof C === "function") {
											C(G)
										}
									} else {
										S.find(".error-container").html("<p>" + I18N.POSTCODE_LOOKUP_MUST_CHOOSE_ONE + "</p>")
									}
									return false
								}).validate({
									highlight: function () {}
								})
							}, true)
						}
						A.postcodelookup.looking = false
					}
				});
				return false
			})
		})
	};
	A.fn.setOrEmptyVal = function (B) {
		if (B) {
			this.val(B)
		} else {
			this.val("")
		}
		return this
	};
	A.fn.roomrequirements = function (C) {
		if (!this.length) {
			return this
		}
		var B = (typeof C !== "undefined");
		return this.each(function () {
			var G = A(this);
			G[0].requirementsVO = (B) ? C : new RequirementsVO();
			G.submit(function () {
				var U = A(G[0].bookingoption);
				if (U.length && U.is(":checked")) {
					G[0].requirementsVO.bookingOption = U.val()
				}
				var N = A(this).find(".error-container");
				if (N.length === 0) {
					N = A(this).parents(".ui-tabs-panel").find(".error-container")
				}
				if (N.length === 0) {
					N = A(".error-container")
				}
				if (N.length === 0) {
					G.find("button").before('<div class="error-container"></div>');
					N = G.find(".error-container")
				}
				if (this.requirementsVO.startDate === null) {
					N.html('<p class="errorLabel">' + I18N.SELECT_ARRIVAL_DATE + "</p>");
					return false
				}
				var V = new Date();
				var L = new Date(this.requirementsVO.startDate.getFullYear(), this.requirementsVO.startDate.getMonth(), this.requirementsVO.startDate.getDate());
				var K = 1000 * 60 * 60 * 24;
				var P = Math.ceil((L.getTime() - V.getTime()) / (K));

				function J(W) {
					return ((W % 4 == 0) && (W % 100 != 0 || W % 400 == 0))
				}
				var R = 364;
				var T = V.getFullYear();
				var O = this.requirementsVO.startDate.getFullYear();
				if (T !== O && (J(T) || J(O))) {
					var Q;
					if (J(T)) {
						Q = new Date(T, 1, 28)
					} else {
						Q = new Date(O, 1, 28)
					} if (V.getTime() < Q.getTime() && Q.getTime() < L.getTime()) {
						R = 365
					}
				}
				if (P > R) {
					N.html('<p class="errorLabel">' + I18N.TOO_FAR_AHEAD + "</p>");
					return false
				}
				var M = new Date();
				M.setDate(M.getDate() - 1);
				var S = M < this.requirementsVO.startDate;
				if (!S) {
					A(".warningtxt").show();
					N.html('<p class="errorLabel">' + I18N.DATE_IN_PAST + "</p>")
				} else {
					A(".warningtxt").hide();
					N.html("")
				}
				return S
			});
			var I = G.find("select.numberOfRooms");
			I.change(function (N, O) {
				var L = I.val();
				if (L === "GROUP") {
					var S = "<div>";
					S += " <h2>" + I18N.GROUPBOOKING_HEAD + "</h2>";
					S += " <p>" + I18N.GROUPBOOKING_BODY + "</p>";
					var R = G[0].requirementsVO;
					S += ' <form class="popup-form-buttons" action="' + G.find(".fiveplus").attr("href") + '" method="post">';
					S += '       <input type="hidden" name="groupBooking.location" value="' + G.find('input[name="searchModel.searchTerm"]').val() + '"/>';
					S += '       <input type="hidden" name="groupBooking.arrivalDay" value="' + G.find('select[name="availabilityModel.day"]').val() + '"/>';
					S += '       <input type="hidden" name="groupBooking.arrivalMonth" value="' + G.find('select[name="availabilityModel.selectedMonthAndYear"]').val() + '"/>';
					S += '       <input type="hidden" name="groupBooking.nights" value="' + R.nights + '"/>';
					S += '       <span class="button-rounded checkAv2" style="float: left;"><button class="wrapped jqmClose" onclick="explore.backFromGroup();">' + I18N.GROUPBOOKING_CANCEL + "</button></span>";
					S += '       <span class="button-rounded checkAv" style="float: right;"><button class="wrapped" onclick="this.form.submit();">' + I18N.GROUPBOOKING_GO + "</button></span>";
					S += " </form>";
					S += "</div>";
					if (this.id !== "calendarBubble_availabilityModel_numOfRooms") {
						I.dialognow(A(S), function (T) {
							T.find(".book-map-search-button").click(function () {})
						}, true)
					} else {
						A("div.pipop-padding").html(A(S));
						A("div").find(".book-map-search-button").click(function () {
							A("div").find(".popup-form-buttons").submit()
						})
					}
					I.val("1").change();
					return false
				}
				var K = parseInt(L, 10);
				G[0].requirementsVO.noOfRooms = K;
				for (var M = 1; M < 4; M++) {
					var P = G.find(".roomsrow" + M);
					var Q = P.is("tr");
					var J = (Q) ? P.find(".wwgrp, h4, .hdr div") : A("div.roomDetails:eq(" + M + ")");
					if (M >= K) {
						if (O) {
							J.hide()
						} else {
							J.slideUp()
						}
					} else {
						if (O) {
							J.show()
						} else {
							J.slideDown()
						}
					}
				}
			});
			if (I[0] !== undefined) {
				I.trigger("change", true);
				if (G.find(".fiveplus").length !== 0 && I[0].options.length <= 4) {
					I[0].options[I[0].options.length] = new Option("5+", "GROUP")
				}
			}
			var D = function () {
				var J = "";
				for (var K = 0; K < 4; K++) {
					var M = G.find(".roomsrow" + K);
					var L = G[0].requirementsVO.rooms[K];
					L.adults = M.find("select.roomAdults").val();
					L.children = M.find("select.roomChildren").val();
					L.cot = M.find("select.roomCots").val();
					L.occupancy = M.find("select.roomType").val()
				}
			};
			var E = function () {
				var P = [RequirementVO.prototype.OCCUPANCY.SINGLE, I18N.RTYPE_SINGLE];
				var O = [RequirementVO.prototype.OCCUPANCY.TWIN, I18N.RTYPE_TWIN];
				var Q = [RequirementVO.prototype.OCCUPANCY.DOUBLE, I18N.RTYPE_DOUBLE];
				var L = [RequirementVO.prototype.OCCUPANCY.FAMILY, I18N.RTYPE_FAMILY];
				var J = [RequirementVO.prototype.OCCUPANCY.DISABLED, I18N.RTYPE_DISABLED];
				var N = A(this).parents(".roomDetails");
				var R = N.find(".roomAdults").val();
				var K = N.find(".roomChildren").val();
				var S = N.find(".roomCots").val();
				var M = N.find(".roomType");
				if ((K === "0") && (S === "false")) {
					if (R === "2") {
						Utils.repopulateSelect(M, [Q, O, J])
					} else {
						Utils.repopulateSelect(M, [Q, P, J])
					}
				} else {
					if ((K === "0") && (S === "true")) {
						Utils.repopulateSelect(M, [Q])
					} else {
						Utils.repopulateSelect(M, [L])
					}
				}
				D();
				if (typeof C !== "undefined") {
					requirements = G[0].requirementsVO
				}
			};
			var F = function () {
				var K = parseInt(G.find("select.selectedDay").val(), 10);
				var N = parseInt(G.find("select.selectedMonth").val().substr(4, 2), 10);
				var M = parseInt(G.find("select.selectedMonth").val().substr(0, 4), 10);
				var J = parseInt(G.find("select.nights, input[name=availabilityModel\\.nights]").val(), 10);
				var L = G.find(".depart-date");
				if ((K === 0) || (N === 0)) {
					L.hide();
					G[0].requirementsVO.startDate = null;
					return
				}
				G[0].requirementsVO.startDate = new Date(M, N - 1, K);
				G[0].requirementsVO.nights = J;
				var O = new Date(M, N - 1, K + J);
				L.show();
				L.find("span").html((I18N.DAY_NAMES[O.getDay()]).substring(0, 3) + " " + O.getDate() + " " + I18N.MONTH_NAMES[O.getMonth()] + " " + O.getFullYear());
				G.find(".linkedDates").val(G.find("select.selectedDay").val() + G.find("select.selectedMonth").val())
			};
			var H = function () {
				if (G.find(".note").size() === 1) {
					if (G.find(".numberOfRooms").val() !== "1") {
						G.find(".note").show()
					} else {
						G.find(".note").hide()
					}
				}
			};
			G.find(".depart-date").show();
			G.find("select.selectedDay, select.selectedMonth, select.nights").live("change", F);
			G.find("fieldset.room-select select").live("change", E);
			G.find(".numberOfRooms").live("change", H);
			G.find("select.nights, select.roomCots").change()
		})
	};
	A.fn.onOccupancyFieldsetChange = function () {
		var H = [RequirementVO.prototype.OCCUPANCY.SINGLE, I18N.RTYPE_SINGLE];
		var G = [RequirementVO.prototype.OCCUPANCY.TWIN, I18N.RTYPE_TWIN];
		var I = [RequirementVO.prototype.OCCUPANCY.DOUBLE, I18N.RTYPE_DOUBLE];
		var D = [RequirementVO.prototype.OCCUPANCY.FAMILY, I18N.RTYPE_FAMILY];
		var B = [RequirementVO.prototype.OCCUPANCY.DISABLED, I18N.RTYPE_DISABLED];
		var F = A(this).parents(".roomDetails");
		var J = F.find(".roomAdults").val();
		var C = F.find(".roomChildren").val();
		var K = F.find(".roomCots").val();
		var E = F.find(".roomType");
		if ((C === "0") && (K === "false")) {
			if (J === "2") {
				Utils.repopulateSelect(E, [I, G, B])
			} else {
				Utils.repopulateSelect(E, [I, H, B])
			}
		} else {
			if ((C === "0") && (K === "true")) {
				Utils.repopulateSelect(E, [I])
			} else {
				Utils.repopulateSelect(E, [D])
			}
		}
	};
	A.fn.disableautocomplete = function () {
		return this.each(function () {
			A(this).attr("autocomplete", "off")
		})
	};
	A.fn.prefollowunhold = function (B) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var D = A(this);
			var C = this.href;
			D.click(function () {
				var E = function () {
					document.location.href = C
				};
				A.ajax({
					url: SWS_URL + "supportService/clearSession/" + B,
					error: E,
					success: E,
					type: "PUT"
				});
				return false
			})
		})
	};
	A.fn.opentriggeredlinks = function (B) {
		A(B).each(function () {
			if (A(this).val()) {
				window.open(A(this).val())
			}
		})
	};
	A.fn.piautocomplete = function (D, B, C) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var K = A(this);
			var I = (C === undefined) ? true : C;
			var O = K.parents("fieldset");
			var H = O.find(D);
			var N = O.find(B);
			var G = O.find(".quickSearchHiddenFieldForUrl");
			var F = function (R) {
				if (G) {
					G.val("")
				}
				var P = [];
				if (!R || R.suggestions === undefined) {
					return P
				}
				var V = R.suggestions;
				var U = 0;
				for (var Q = 0; Q < V.length; Q++) {
					var W = V[Q];
					var T = RegExp("^" + W.name + "$", "i");
					if (K.val().match(T)) {
						if (G) {
							G.val(W.url)
						}
					}
					var S = W.isHotel ? '<span class="hotel">' : "<span>";
					U = 0;
					if (W.distance > 0) {
						U = "<br/><small>" + W.distance.toFixed(1) + " " + I18N.AUTOCOMPLETE_MILESFROM + " " + V[0].name + "</small>"
					} else {
						U = ""
					}
					P.push({
						data: [S + W.name + U + "</span>", W.location, W.name, W.hotelId, W.distance, W.url],
						value: W.name,
						result: W.name
					})
				}
				return P
			};
			K.autocomplete(WS_URL + "hotelLocator/suggestions/", {
				matchSubset: false,
				minChars: 3,
				max: 0,
				selectFirst: false,
				parse: F,
				extraParams: {
					stackable: I
				}
			});
			var M = "";
			var J = function () {
				if (K.val() !== M) {
					H.val("");
					N.val("")
				}
			};
			K.bind("change", J);
			var L = function (R, Q, P) {
				if (Q[1] !== undefined) {
					H.val(Q[1].latitude + "," + Q[1].longitude);
					N.val(Q[1].latitude + "," + Q[1].longitude);
					M = Q[2]
				}
				if (Q[3] !== undefined && Q[3] !== "") {
					H.val(Q[3]);
					M = Q[2]
				}
				if (I) {
					if (G) {
						G.val(Q[5])
					}
				}
			};
			K.bind("result", L);
			var E = function () {
				K.unbind("change", J);
				K.unbind("result", L);
				K.unautocomplete();
				A(window).unbind("beforeunload", E);
				K = J = L = F = H = N = G = E = I = null
			};
			A(window).bind("beforeunload", E);
			K.parents("form").keypress(function (R) {
				var Q = R.keyCode || R.which;
				if (Q === 13) {
					var P = K.parents("form").find(".quickSearchHiddenFieldForUrl");
					if (P.val()) {
						window.open(P.val());
						return false
					}
					return true
				}
			});
			K.parents("form").find("button[type=submit]").click(function () {
				var Q = A(this);
				var P = Q.parents("form").find(".quickSearchHiddenFieldForUrl");
				if (P.val()) {
					window.open(P.val());
					return false
				}
				return true
			})
		})
	};
	A.fn.mobileautocomplete = function (D, B, C) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var M = A(this);
			var J = (C === undefined) ? true : C;
			var Q = M.parents("fieldset");
			var I = Q.find(D);
			var P = Q.find(B);
			var H = Q.find(".quickSearchHiddenFieldForUrl");
			A.Autocompleter.defaults.resultsClass = "ac_results";
			var F = function (T) {
				if (H) {
					H.val("")
				}
				var R = [];
				if (!T || T.suggestions === undefined) {
					return R
				}
				var X = T.suggestions;
				var W = 0;
				for (var S = 0; S < X.length; S++) {
					var Y = X[S];
					var V = RegExp("^" + Y.name + "$", "i");
					if (M.val().match(V)) {
						if (H) {
							H.val(Y.url)
						}
					}
					var U = Y.isHotel ? '<span class="hotel">' : "<span>";
					W = 0;
					if (Y.distance > 0) {
						W = "<br/><small>" + Y.distance.toFixed(1) + " " + I18N.AUTOCOMPLETE_MILESFROM + " " + X[0].name + "</small>"
					} else {
						W = ""
					}
					R.push({
						data: [U + Y.name + W + "</span>", Y.location, Y.name, Y.hotelId, Y.distance, Y.url],
						value: Y.name,
						result: Y.name
					})
				}
				return R
			};
			var G = M.outerWidth();
			var L = function () {
				if (A(".quickbook-results-container")) {
					A(".quickbook-results-container").css("border", "1px solid #000")
				}
			};
			M.autocomplete(WS_URL + "hotelLocator/suggestions/", {
				matchSubset: false,
				minChars: 1,
				max: 0,
				selectFirst: false,
				parse: F,
				extraParams: {
					stackable: J
				},
				target: ".quickbook-results-container .all-results",
				width: G,
				scrollHeight: "",
				focusAfter: false,
				position: "before",
				onInit: L
			});
			var O = "";
			var K = function () {
				if (M.val() !== O) {
					I.val("");
					P.val("")
				}
			};
			M.bind("change", K);
			var N = function (T, S, R) {
				if (S[1] !== undefined) {
					I.val(S[1].latitude + "," + S[1].longitude);
					P.val(S[1].latitude + "," + S[1].longitude);
					O = S[2]
				}
				if (S[3] !== undefined && S[3] !== "") {
					I.val(S[3]);
					O = S[2]
				}
				if (J) {
					if (H) {
						H.val(S[5])
					}
				}
			};
			M.bind("result", N);
			var E = function () {
				M.unbind("change", K);
				M.unbind("result", N);
				M.unautocomplete();
				A(window).unbind("beforeunload", E);
				M = K = N = F = I = P = H = E = J = null
			};
			A(window).bind("beforeunload", E);
			M.parents("form").keypress(function (T) {
				var S = T.keyCode || T.which;
				if (S === 13) {
					var R = M.parents("form").find(".quickSearchHiddenFieldForUrl");
					if (R.val()) {
						window.open(R.val());
						return false
					}
					return true
				}
			});
			M.parents("form").find("button[type=submit]").click(function () {
				var S = A(this);
				var R = S.parents("form").find(".quickSearchHiddenFieldForUrl");
				if (R.val()) {
					window.open(R.val());
					return false
				}
				return true
			})
		})
	};
	A.fn.findautocomplete = function (D, B, C) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var K = A(this);
			var I = (C === undefined) ? true : C;
			var O = K.parents("fieldset");
			var H = O.find(D);
			var N = O.find(B);
			var G = O.find(".quickFindHiddenFieldForUrl");
			A.Autocompleter.defaults.resultsClass = "current_location_results_class ac_results";
			var F = function (R) {
				if (G) {
					G.val("")
				}
				var P = [];
				if (!R || R.suggestions === undefined) {
					return P
				}
				var V = R.suggestions;
				var U = 0;
				for (var Q = 0; Q < V.length; Q++) {
					var W = V[Q];
					var T = RegExp("^" + W.name + "$", "i");
					if (K.val().match(T)) {
						if (G) {
							G.val(W.url)
						}
					}
					var S = W.isHotel ? '<span class="hotel">' : "<span>";
					P.push({
						data: [S + W.name + "</span>", W.location, W.name, W.hotelId, W.distance, W.url],
						value: W.name,
						result: W.name
					})
				}
				return P
			};
			K.autocomplete(WS_URL + "hotelLocator/suggestions/", {
				matchSubset: false,
				minChars: 3,
				max: 10,
				selectFirst: false,
				parse: F,
				extraParams: {
					stackable: I
				},
				target: ".results-container",
				title: "Search results",
				activeClass: "ac_highlite",
				position: "before",
				focusAfter: false
			});
			var M = "";
			var J = function () {
				if (K.val() !== M) {
					H.val("");
					N.val("")
				}
			};
			K.bind("change", J);
			var L = function (R, Q, P) {
				if (Q[1] !== undefined) {
					H.val(Q[1].latitude + "," + Q[1].longitude);
					N.val(Q[1].latitude + "," + Q[1].longitude);
					M = Q[2];
					window.open("/en/hotels/" + Q[2], "_self")
				}
				if (Q[3] !== undefined && Q[3] !== "") {
					H.val(Q[3]);
					M = Q[2];
					window.open("/en/hotel/" + Q[3], "_self")
				}
				if (I) {
					if (G) {
						G.val(Q[5])
					}
				}
			};
			K.bind("result", L);
			var E = function () {
				K.unbind("change", J);
				K.unbind("result", L);
				K.unautocomplete();
				A(window).unbind("beforeunload", E);
				K = J = L = F = H = N = G = E = I = null
			};
			A(window).bind("beforeunload", E);
			K.parents("form").keypress(function (R) {
				var Q = R.keyCode || R.which;
				if (Q === 13) {
					var P = K.parents("form").find(".quickFindHiddenFieldForUrl");
					if (P.val()) {
						window.open(P.val());
						return false
					}
					return true
				}
			});
			K.parents("form").find("button[type=submit]").click(function () {
				var Q = A(this);
				var P = Q.parents("form").find(".quickFindhHiddenFieldForUrl");
				if (P.val()) {
					window.open(P.val());
					return false
				}
				return true
			})
		})
	}
})(jQuery);
$.ajaxSetup({
	type: "GET",
	dataType: "json",
	beforeSend: function (A) {
		A.setRequestHeader("Accept", "application/json")
	}
});
var pio = window.pio || {};
$(document).ready(function () {
	var B = location.hostname.split("."),
		C = B.length,
		A = B[C - 1];
	A = B[C - 2] ? B[C - 2] + "." + A : A;
	$('a[href^="http"]:not([href*="' + A + '"]),a.newwindow,a:has(span.external),a[rel="external"]').live("click", function () {
		return !window.open(this.href)
	});
	$(".ac_input").live("keydown", function (D) {
		if (parseInt(D.keyCode, 10) === 8) {
			$(D.target).closest("form").find(".quickSearchHiddenField").val("")
		}
	});
	if (document.location.href.indexOf("/errors/") > -1) {
		if (parent.window.location.href != document.location.href) {
			top.location.replace(document.location.href)
		}
	}
});
if ($.validator !== undefined) {
	$.validator.setDefaults({
		highlight: function (C, A) {
			var B = $(C);
			B.parents("form").find('label[for="' + B.attr("id") + '"]').addClass("errorLabel")
		},
		unhighlight: function (C, A) {
			var B = $(C);
			B.parents("form").find('label[for="' + B.attr("id") + '"]').removeClass("errorLabel")
		},
		errorPlacement: function () {}
	});
	$.validator.addMethod("nicetext", function (A) {
		return (/^[a-zA-Z-'\s]*$/).test(A)
	});
	$.validator.addMethod("javaemail", function (A) {
		return (/^[_A-Za-z0-9\-\+]+(\.[_A-Za-z0-9\-\+]+)*@([A-Za-z0-9\-])+(\.[A-Za-z0-9\-]+)*((\.[A-Za-z0-9]{2,})|(\.[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}))$/).test(A)
	})
}
$.el = function (A) {
	return $(document.createElement(A))
};
var DD_belatedPNG = {
	fix: function (A) {},
	fixPng: function (A) {}
};

function loadExternalOverlay() {}(function (A) {
	A.fn.loginutils = function () {
		var E = A(this),
			J = E.find("li.viewcancel"),
			I, H = "",
			F = "",
			D = "",
			C = "";
		if (!this.length || J.length < 1) {
			return this
		}
		var B = readCookie("PILOGIN");
		if (window.GLOBAL_LOGGED_IN === undefined) {
			window.GLOBAL_LOGGED_IN = false
		}
		window.GLOBAL_LOGGED_IN = readCookie("PILOGIN") !== null ? true : window.GLOBAL_LOGGED_IN;
		H = GLOBAL_LOGGED_IN === true ? ".login" : ".logout";
		E.find("li.login,li.logout").show().filter(H).hide();
		F = GLOBAL_LOGGED_IN === true ? "/mypremierinn/currentBookings" : "/searchForBooking";
		I = J.find("a");
		D = I.attr("href");
		var G = (window.LOCALE !== undefined) ? window.LOCALE : "en";
		C = D.substring(D.indexOf("/" + G.substring(0, 2)));
		C = D.substring(0, D.indexOf(C));
		I.attr("href", C + "/" + G + F + ".action")
	};
	A.fn.passwordcheck = function () {
		A("#password-strength").hide();
		A(this).bind("keyup blur pwCheck", function () {
			A("#password-strength").slideDown("normal");
			var D = PasswordStrength(A(this).val()),
				C = "",
				B = "";
			switch (D) {
			case 0:
				B = "Password strength";
				C = "Your password contains invalid characters";
				A("#password-strength .password-status").removeClass("status-strong");
				A("#password-strength .password-status").removeClass("status-weak");
				A("#password-strength .password-status").addClass("status-invalid");
				A(".form-highlite-pword").show();
				A("#password-info").text(C);
				break;
			case 1:
				B = "Password strength";
				C = "Your password must be at least 8 characters long";
				A("#password-strength .password-status").removeClass("status-strong");
				A("#password-strength .password-status").removeClass("status-invalid");
				A("#password-strength .password-status").addClass("status-weak");
				A(".form-highlite-pword").show();
				A("#password-info").text(C);
				break;
			case 2:
				B = "Password strength";
				C = "Your password should contain a mixture of numbers letters and cases";
				A("#password-strength .password-status").removeClass("status-strong");
				A("#password-strength .password-status").removeClass("status-invalid");
				A("#password-strength .password-status").addClass("status-weak");
				A(".form-highlite-pword").show();
				A("#password-info").text(C);
				break;
			default:
				B = "Your password strength is high";
				A("#password-strength .password-status").removeClass("status-weak");
				A("#password-strength .password-status").addClass("status-strong");
				A(".form-highlite-pword").hide()
			}
			A(".password-status").text(B)
		});
		return this
	};
	A.passwordcheck = {
		getInfo: function () {
			return A("#password-info").text()
		}
	};
	A.fn.linkoverride = function (B) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var D = A(this);
			var C = readCookie("PILOGIN");
			if (window.GLOBAL_LOGGED_IN === undefined) {
				window.GLOBAL_LOGGED_IN = false
			}
			window.GLOBAL_LOGGED_IN = (readCookie("PILOGIN") !== null) ? true : window.GLOBAL_LOGGED_IN;
			if (D.attr("href").trim !== "" && window.GLOBAL_LOGGED_IN === true) {
				D.attr("href", B)
			}
		})
	};
	A.fn.langdropdown = function () {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var F = A(this);
			F.hide();
			var B = "";
			var E = A("form label", F).html();
			var C = "<span>" + E + "</span>";
			var D = document.location.pathname;
			A(".lsel", F).each(function () {
				var M = A(this);
				var K = M.metadata();
				var H = M.html();
				var I = (K.lang) ? " l-" + K.lang : "";
				H = H.split("|");
				var G = '<span class="sect-cc">' + H[0] + '</span><span class="sect-ln' + I + '">' + H[1] + "</span>";
				var J;
				J = M.parents("form").attr("action") + "?" + M.parents("select").attr("name") + "=" + M.attr("value");
				var L = "";
				if (K.external) {
					L = ' onclick="return !window.open(this.href);" '
				}
				B += '<li><a href="' + J + '"' + L + ">" + G + "</a></li>"
			});
			F.before('<div class="ldd-header">' + A(".lsel:first", F).html() + "</div>");
			F.append('<div class="ldd-wrapper"><a class="dropdown" href="' + D + '" onclick="return false">' + C + '</a><div id="selbox"><ul></ul></div></div>');
			F.find("#selbox ul").html(B);
			F.hover(function () {
				F.find("#selbox").stop(true).css("height", "auto").slideDown(200)
			}, function () {
				F.find("#selbox").stop(true).slideUp(100)
			});
			F.find("form").css({
				position: "absolute",
				left: "-9999px"
			});
			F.show()
		})
	};
	A.fn.datepickerinit = function () {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var G = A(this);
			var B = G.parent().find(".selectedMonth");
			var F = G.parent().parent().find(".selectedDay");
			var C = function () {
				G.val(B.val() + F.val());
				DD_belatedPNG.fix(".generated-calendar-top");
				DD_belatedPNG.fix(".generated-calendar-bottom");
				return {}
			};
			var H = function (I) {
				B.find("option[value='" + I.substring(0, 6) + "']").attr("selected", "selected");
				B.change();
				F.find("option:contains(" + I.substring(6, 8) + ")").attr("selected", "selected");
				F.change()
			};
			var E = function () {
				var J = 32 - new Date(B.val().substring(0, 4), B.val().substring(4, 6) - 1, 32).getDate();
				var I = F.find("option").size() - 31;
				F.find("option").attr("disabled", "");
				F.find("option:gt(" + (J - 1 + I) + ")").attr("disabled", "disabled");
				if (F.val() > J) {
					F.val(J);
					F.change()
				}
			};
			G.datepicker({
				dayNamesMin: I18N.CAL_DAY_INITIALS,
				closeText: " ",
				dateFormat: "yymmdd",
				firstDay: 1,
				minDate: 0,
				maxDate: "-1d+1y",
				mandatory: true,
				beforeShow: C,
				onSelect: H,
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
			B.change(E);
			F.change(E);
			B.triggerHandler("change");
			DD_belatedPNG.fix("a.ui-datepicker-trigger img");
			var D = function () {
				G.datepicker("destroy");
				A(window).unbind("beforeunload", D);
				C = H = D = null
			};
			A(window).bind("beforeunload", D)
		})
	};
	A.fn.expandingpanel = function () {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var D = A(this);
			var C = D.find(".expandingcontent");
			var B = D.find("h4");
			C.hide();
			B.addClass("expandable").click(function () {
				if (B.hasClass("expanded")) {
					B.removeClass("expanded").addClass("expandable");
					C.stop(true).slideUp("normal")
				} else {
					B.removeClass("expandable").addClass("expanded");
					C.stop(true).css("height", "auto").slideDown("normal")
				}
			})
		})
	};
	A.fn.expandingmenu = function (B) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var C = A(this);
			C.find(".subcat2").hide();
			C.find(".expand").bind("mouseover", function () {
				A(this).css("cursor", "pointer")
			});
			C.find(".expand").click(function () {
				A(this).parent("li").find(".subcat2").toggle("normal");
				if (A(this).is(".expand")) {
					A(".contract").parent("li").find(".subcat2").hide("normal");
					A(".contract").parent("li").find(".contract").addClass("expand");
					A(".contract").parent("li").find(".contract").removeClass("contract");
					A(this).removeClass("expand");
					A(this).addClass("contract")
				} else {
					A(this).removeClass("contract");
					A(this).addClass("expand")
				}
				return false
			});
			if (B !== undefined) {
				C.find("a[href*='offerCategory=" + escape(B) + "']").css("color", "#FFC726").closest("ul").closest("li").find("a:first").click()
			}
		})
	};
	A.fn.crushspaces = function () {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var B = A(this);
			B.val(B.val().replace(/ /g, ""))
		})
	};
	A.fn.popuplink = function (B, C, D) {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var E = A(this);
			E.click(function () {
				if (typeof window.explore !== "undefined") {
					window.explore.closeOverlay()
				}
				var F = A('<div><div class="result" style="height:500px; overflow:auto; -webkit-overflow-scrolling: touch;"><img src="' + CQ_ASSETS_URL + 'images/throbber.gif"/></div></div>');
				F.dialognow(F, function (G) {
					A.ajax({
						url: E.attr("href"),
						dataType: "html",
						error: function () {
							G.find(".result").html("")
						},
						success: function (H) {
							var I = A(H).find("#termsAndConditions, #privacy, .popupinners").html();
							G.find(".result").html(I);
							A("#hi-image-control", ".result").modalgallery();
							A("#mapContainer", ".result").loadmap(B, C, D);
							A.fixJQM(G)
						}
					})
				}, true);
				return false
			})
		})
	};
	A.fn.loadmap = function (D, G, F) {
		if (this.length < 1) {
			return this
		}
		var M = A("<div/>");
		var E = A("<div/>");
		var J = A("<div/>");
		var L = A("<div/>");
		var I = new Tally();
		var B = A("<div/>");
		var K = new NetworkFunnel(E, B, J, I, [D]);
		var H = new VELatLong(D.latitude, D.longitude);
		H.zoom = G;
		H.suppressSearchIcon = true;
		var C = new MapPanel(A("#mapContainer"), H, K, E, J, L, B, I, M, true, false, undefined, F);
		C.showAsSearchResults([D]);
		K.getAllHotels()
	};
	A.fn.modalgallery = function () {
		if (this.length < 1) {
			return this
		}
		DD_belatedPNG.fixPng(A(".corners")[0]);
		DD_belatedPNG.fix(".imageCaptionContainer");
		A(".imageContainerWrapper, .imageContainer").css("height", "235px");
		A(".imageContainerWrapper").css("background", "url(" + CQ_ASSETS_URL + "images/throbber.gif) no-repeat center center");
		var B = A("#hi-image-control").galleriffic(".thumbsContainer", {
			delay: 3000,
			numThumbs: 5,
			preloadAhead: 0,
			enableTopPager: true,
			enableBottomPager: true,
			enableHistory: false,
			imageContainerSel: ".imageContainer",
			captionContainerSel: ".imageCaptionContainer",
			controlsContainerSel: "",
			titleContainerSel: "",
			descContainerSel: "",
			downloadLinkSel: "",
			renderSSControls: true,
			renderNavControls: true,
			nextPageLinkText: I18N.HOTELDETAILS_CAROUSEL_NEXTPG,
			prevPageLinkText: I18N.HOTELDETAILS_CAROUSEL_PREVPG,
			onTransitionOut: function (D) {
				A("div.imageContainer").fadeOut("fast", D)
			},
			onTransitionIn: function () {
				if (A(".imageCaptionContainer .caption").length > 0) {
					A(".imageCaptionContainer").show()
				} else {
					A(".imageCaptionContainer").hide()
				}
				A("div.imageContainer").fadeIn("fast")
			}
		});
		if (typeof B !== undefined) {
			var C = B.find("ul.thumbs li");
			bp = (C.length > 5) ? "" : A.el("div").addClass("bottom").addClass("pagination");
			C.parent().after(bp)
		}
	};
	A.fn.sendToAFriendPopup = function () {
		if (!this.length) {
			return this
		}
		var E = function (F) {
			F.find(".sendToAFriend button").show();
			F.find(".sendToAFriendStatus").text(I18N.STAF_ERROR).show();
			F.find(".sendToAFriendThrobber").hide()
		};
		var D = A(this);
		var C = function (F) {
			F.find("form").ajaxForm({
				dataType: "html",
				beforeSubmit: function (J, H, G) {
					var I = H.valid();
					if (!I) {
						F.find(".warningtxt").show();
						return false
					}
					F.find(".warningtxt").hide();
					F.find(".sendToAFriend button").hide();
					F.find(".sendToAFriendStatus").hide();
					F.find(".sendToAFriendThrobber").show()
				},
				error: function () {
					E(F)
				},
				success: function (H) {
					if (H.indexOf("errorLabel") !== -1) {
						E(F);
						return
					}
					F.find("form.sendToAFriend").slideUp("normal");
					var I = document.getElementById("email.recipient").value;
					var G = "&nbsp;<br/>Thanks, your email has been sent and your friend should receive it shortly.<br/>Sent to " + I;
					F.find(".sendToAFriendResult").html(G).slideDown("normal");
					A(".pipop-padding p:first").hide()
				}
			})
		};
		D.dialognow(D, C, true);
		var B = function () {
			A(window).unbind("beforeunload", B)
		};
		A(window).bind("beforeunload", B)
	};
	A.fn.formbuttontolink = function () {
		if (!this.length) {
			return this
		}
		return this.each(function () {
			var C = A(this);
			var B = A.el("a").attr({
				href: "#",
				"class": C.attr("class")
			}).html(C.attr("value"));
			C.after(B);
			B.click(function () {
				C.parents("form").submit();
				return false
			});
			C.hide()
		})
	};
	A.fixJQM = function (B) {
		B.find("input, label, button").click(Utils.cancelBubbling);
		B.find(".pipop-body").click(function (H) {
			if (H.target && H.target.tagName === "A") {
				var F = H.target,
					D = F.href,
					E = (D.indexOf(".premierinn.") > -1);
				if (!E) {
					var C = D.indexOf("#");
					if (C !== -1) {
						var G = A("a[name=" + D.substr(C + 1) + "]");
						A(".result").scrollTo(G);
						return false
					} else {
						Utils.cancelBubbling(H);
						return !window.open(D)
					}
				}
				if (!H.isDefaultPrevented() && D.indexOf("javascript:") === -1) {
					window.location = F.href;
					return true
				}
			}
		})
	};
	A.fn.centerInViewport = function (B, I, C) {
		var E = "absolute",
			D = "fixed",
			H = A(window),
			G = this.offset(),
			F = A("body").height();
		elH = this.height(), elW = this.width(), scrollTop = H.scrollTop(), scrollLeft = H.scrollLeft(), curLeft = G.left - scrollLeft, curTop = G.top - scrollTop, elBottom = G.top + elH, winH = H.height(), winW = H.width(), posType = (this.css("position") === D) ? D : E, newTop = (winH - elH) / 2, newLeft = Math.max((winW - elW) / 2, 0), B = (B !== false), I = (I !== false), C = (C !== false);
		if (newTop < 0) {
			newTop = Math.min(F - elBottom, 0);
			posType = E;
			this.css({
				position: E,
				top: G.top + "px"
			})
		}
		if (newTop >= curTop) {
			C = false
		}
		if (!C) {
			newTop = curTop
		}
		if (!I) {
			newLeft = curLeft
		}
		if (posType === E) {
			newTop += scrollTop;
			newLeft += scrollLeft
		}
		if (B) {
			this.animate({
				top: newTop,
				left: newLeft
			})
		} else {
			this.css({
				top: newTop + "px",
				left: newLeft + "px"
			})
		}
	};
	A.dialognow = {};
	A.fn.dialognow = function (E, D, F, B) {
		if (A.dialognow.open) {
			return
		}
		A.dialognow.open = true;
		if (!this.length) {
			return this
		}
		if (F !== true) {
			F = false
		}
		B = (typeof B === "undefined") ? "" : B;
		B = (B.length > 0) ? " " + B : B;
		var H = "";
		H += '<div class="popup-content' + B + '">';
		H += '	<div class="titlebar">';
		if (F) {
			H += '		<div class="piclose"><a href="#" class="jqmClose">' + I18N.POPUP_CLOSE + " X</a></div>"
		}
		H += "	</div>";
		H += '	<div class="pipop-body">';
		H += '		<div class="pipop-inner">';
		H += '			<div class="pipop-mask">';
		H += '				<div class="pipop-padding">';
		var G = "";
		G += "				</div>";
		G += "			</div>";
		G += "		</div>";
		G += "	</div>";
		G += "</div>";
		var C = E.html();
		return A(this).each(function () {
			var K = A.el("div").attr({
				id: "pipopupcontainer"
			}).addClass("jqModal").addClass("pipopupbox");
			A("body").append(K);
			var J = A("#pipopupcontainer");
			J.bind("resized.popup", function (L) {
				J.centerInViewport(true, false, true)
			});
			J.html(H + C + G);

			function I() {
				J.centerInViewport(false)
			}
			J.jqm({
				modal: !F,
				onShow: function (P) {
					var N = window.innerHeight;
					var M = window.innerWidth;
					if ((N === undefined) && (document.documentElement)) {
						N = document.documentElement.clientHeight;
						M = document.documentElement.clientWidth
					}
					P.w.css("left", Math.floor((M - P.w.width()) / 2) + "px");
					var O = Math.floor((N - P.w.height()) / 2);
					if (O < 0) {
						O = A(window).scrollTop();
						P.w.css("position", "absolute")
					}
					if (A.browser.msie && (parseInt(A.browser.version, 10) === 6)) {
						P.w[0].topOffset = O
					} else {
						P.w.css("top", O + "px")
					}
					P.o.hide().fadeIn("normal");
					var L = P.w.show().find(".pipop-mask").hide();
					setTimeout(function () {
						L.slideUp(0).slideDown("normal")
					}, 10);
					E.html(".");
					A.fixJQM(P.w);
					if (D !== undefined) {
						D(P.w)
					}
					A(window).bind("resize", I)
				},
				onHide: function (L) {
					E.html(C);
					L.w.find(".pipop-mask").slideUp("normal", function () {
						J.remove()
					});
					L.o.fadeOut("normal", function () {
						L.o.remove()
					});
					A("body").trigger("dialogClosed");
					A(window).unbind("resize", I);
					A.dialognow.open = false
				}
			}).jqmShow();
			return false
		})
	};
	A.fn.dialognowforaab = function (E, D, F, B) {
		if (!this.length) {
			return this
		}
		if (F !== true) {
			F = false
		}
		B = (typeof B === "undefined") ? "" : B;
		B = (B.length > 0) ? " " + B : B;
		var H = "";
		H += '<div class="popup-content' + B + '">';
		H += '	<div class="titlebar">';
		if (F) {
			H += '		<div class="piclose"><a href="#" class="jqmClose">' + I18N.POPUP_CLOSE + " X</a></div>"
		}
		H += "	</div>";
		H += '	<div class="pipop-body">';
		H += '		<div class="pipop-inner">';
		H += '			<div class="pipop-mask">';
		H += '				<div class="pipop-padding">';
		var G = "";
		G += "				</div>";
		G += "			</div>";
		G += "		</div>";
		G += "	</div>";
		G += "</div>";
		var C = E.html();
		return A(this).each(function () {
			var J = A.el("div").attr({
				id: "pipopupcontainer"
			}).addClass("jqModal").addClass("pipopupbox");
			A("body").append(J);
			var I = A("#pipopupcontainer");
			I.html(H + C + G);
			I.jqm({
				modal: !F,
				onShow: function (O) {
					var M = window.innerHeight;
					var L = window.innerWidth;
					if ((M === undefined) && (document.documentElement)) {
						M = document.documentElement.clientHeight;
						L = document.documentElement.clientWidth
					}
					O.w.css("left", Math.floor((L - O.w.width()) / 2) + "px");
					var N = Math.floor((M - O.w.height()) / 2);
					if (N < 0) {
						N = A(window).scrollTop();
						O.w.css("position", "absolute")
					}
					if (A.browser.msie && (parseInt(A.browser.version, 10) === 6)) {
						O.w[0].topOffset = N
					} else {
						O.w.css("top", N + "px")
					}
					O.o.hide().fadeIn("normal");
					var K = O.w.show().find(".pipop-mask").hide();
					setTimeout(function () {
						K.slideUp(0).slideDown("normal")
					}, 10);
					A.fixJQM(O.w);
					if (D !== undefined) {
						D(O.w)
					}
				},
				onHide: function (K) {
					E.html(C);
					K.w.find(".pipop-mask").slideUp("normal", function () {
						I.remove()
					});
					K.o.fadeOut("normal", function () {
						K.o.remove()
					});
					A("body").trigger("dialogClosed")
				}
			}).jqmShow();
			return false
		})
	};
	A.fn.dialoginit = function (D, E, C) {
		if (!this.length) {
			return this
		}
		if (E === undefined) {
			E = "normal"
		}
		var G = "";
		if (E === "wide") {
			G += '<div class="tandc-popup">'
		}
		G += '<div class="popup-content">';
		G += '	<div class="titlebar">';
		G += '		<div class="piclose"><a href="#" class="jqmClose">' + I18N.POPUP_CLOSE + " X</a></div>";
		G += "	</div>";
		G += '	<div class="pipop-body">';
		G += '		<div class="pipop-inner">';
		G += '			<div class="pipop-mask">';
		G += '				<div class="pipop-padding">';
		var F = "";
		F += "				</div>";
		F += "			</div>";
		F += "		</div>";
		F += "	</div>";
		F += "</div>";
		if (E === "wide") {
			F += "</div>"
		}
		var B = D.html();
		return this.click(function (H) {
			H.preventDefault();
			var J = A.el("div").attr({
				id: "pipopupcontainer"
			}).addClass("jqModal").addClass("pipopupbox");
			if (E === "wide") {
				J.addClass("pipopupbox-wide")
			}
			A("body").append(J);
			var I = A("#pipopupcontainer");
			I.html(G + B + F);
			I.jqm({
				modal: false,
				onShow: function (O) {
					var M = window.innerHeight;
					var L = window.innerWidth;
					if ((M === undefined) && (document.documentElement)) {
						M = document.documentElement.clientHeight;
						L = document.documentElement.clientWidth
					}
					O.w.css("left", Math.floor((L - O.w.width()) / 2) + "px");
					var N = Math.floor((M - O.w.height()) / 2);
					if (A.browser.msie && (parseInt(A.browser.version, 10) === 6)) {
						O.w[0].topOffset = N
					} else {
						O.w.css("top", N + "px")
					}
					O.o.hide().fadeIn("normal");
					var K = O.w.show().find(".pipop-mask").hide();
					setTimeout(function () {
						K.slideUp(0).slideDown("normal")
					}, 10);
					D.html(".");
					A.fixJQM(O.w);
					if (C !== undefined) {
						C(O.w)
					}
				},
				onHide: function (K) {
					D.html(B);
					K.w.find(".pipop-mask").slideUp("normal", function () {
						I.remove()
					});
					K.o.fadeOut("normal", function () {
						K.o.remove()
					})
				}
			}).jqmShow();
			return false
		})
	};
	A.fn.getPromoJSON = function (C) {
		if (!this.length) {
			return this
		}
		var E = {
			urls: {
				fallback1: "../../assets/js/parkflypackages.json-5.html"
			},
			className: "leftnavpod3"
		};
		var D = A.extend(E, C);

		function B(I) {
			var H = false;
			var F = new Date();
			var M = new Date();
			var G = new Date();
			var J = [];
			var L = [];
			try {
				J = I.defaultPromo.startDate.split("/");
				L = I.defaultPromo.endDate.split("/");
				F.setFullYear(J[2], J[1] - 1, J[0]);
				M.setFullYear(L[2], L[1] - 1, L[0]);
				if ((F < G) && (G < M)) {
					H = I.defaultPromo
				}
			} catch (K) {}
			A.each(I.list, function (N, O) {
				if ((typeof this.ie === "undefined") && (N !== 0)) {
					J = this.startDate.split("/");
					L = this.endDate.split("/");
					F.setFullYear(J[2], J[1] - 1, J[0]);
					M.setFullYear(L[2], L[1] - 1, L[0]);
					if ((F < G) && (G < M)) {
						H = this
					}
				}
			});
			return H
		}
		return this.each(function () {
			var F = A(this);
			var G = (A.fn.metadata) ? A.extend({}, D, F.metadata()) : D;
			A.each(G.urls, function (I, H) {
				A.ajax({
					url: H,
					error: function (J) {},
					success: function (Y) {
						var N = B(Y);
						try {
							var R = N.title.replace(/`/g, "'");
							var X = N.body.replace(/`/g, "'");
							var V = "";
							if (typeof N.modal !== "undefined") {
								V = N.modal.replace(/`/g, "'")
							}
							var Q = A.el("img").attr({
								src: N.image.url,
								width: N.image.width,
								height: N.image.height,
								alt: N.image.alt
							});
							var S = Math.floor(Math.random() * 10000000000);
							var O = "jpro-" + parseInt(S, 10);
							var T = N.url;
							var J = A.el("div").attr("id", O).addClass(G.className);
							var L = A.el("a").attr("href", T);
							var U = A.el("div").addClass("whitearrow");
							var W = A.el("p").addClass("header");
							var K = A.el("p").html(L);
							F.append(J);
							A("#" + O).html(Q).find("img").after(K).after(W).after(U);
							A("img", "#" + O).wrap(L);
							A("p", "#" + O).html(L);
							A("p.header a", "#" + O).html(R);
							A("p:not(.header) a", "#" + O).html(X);
							if (V.length > 0) {
								var P = A.el("div").addClass("promopopupcontent");
								F.append(P.html(V));
								A("a", "#" + O).dialoginit(A(".promopopupcontent:first", F))
							}
						} catch (M) {}
					}
				})
			})
		})
	};
	A.fn.slideUpWithTick = function (D, B, E) {
		var C = A(this);
		C.animate({
			height: "1px"
		}, {
			duration: D,
			complete: function () {
				C.hide();
				if (B !== undefined) {
					B()
				}
				E()
			},
			step: E
		})
	};
	A.fn.slideDownWithTick = function (E, C, F) {
		var D = A(this);
		D.show().height("auto");
		var B = D.height();
		D.height("1px").animate({
			height: B
		}, {
			duration: E,
			complete: function () {
				if (C !== undefined) {
					C()
				}
				F()
			},
			step: F
		})
	};
	jQuery.fn.exploresort = (function () {
		var B = [].sort;
		return function (D, E) {
			E = E || function () {
				return this
			};
			var C = this.map(function () {
				var G = E.call(this),
					F = G.parentNode,
					H = F.insertBefore(document.createTextNode(""), G.nextSibling);
				return function () {
					if (F === this) {
						throw new Error("You can't sort elements if any one is a descendant of another.")
					}
					F.insertBefore(this, H);
					F.removeChild(H)
				}
			});
			return B.call(this, D).each(function (F) {
				C[F].call(E.call(this))
			})
		}
	})();
	A.fn.ctabutton = function () {
		var B = A(this);
		if (!this.length) {
			return this
		}
		return this.each(function () {
			A(this).closest(".button-rounded").mouseover(function () {
				A(this).addClass("button-roundedActive")
			}).mouseout(function () {
				A(this).removeClass("button-roundedActive")
			})
		})
	};
	A.fn.stafinject = function () {
		var G = A(this),
			E = [];
		E.push('<div class="sendToAFriend">');
		E.push("	<h2>Email page to a friend</h2>");
		E.push("	<p>Details marked with an asterisk * must be completed.</p>");
		E.push('	<form id="emailToFriend" onsubmit="return true;" action="/en/emailToFriend!execute.action" method="post" class="sendToAFriend">');
		E.push("		<fieldset>");
		E.push('			<span class="stafInfo"></span>');
		E.push("		</fieldset>");
		E.push('		<fieldset style="display:none" class="insertfields"></fieldset>');
		E.push('		<fieldset class="bordered">');
		E.push('			<div class="warningtxt" style="display:none">');
		E.push('				<div class="wt-tl"></div>');
		E.push('				<div class="wt-tr"></div>');
		E.push('				<div class="wtinside">');
		E.push('					<div class="errorLabel">Please check and fill the fields required</div>');
		E.push("				</div>");
		E.push('				<div class="wt-bl"></div>');
		E.push('				<div class="wt-br"></div>');
		E.push("			</div>");
		E.push('			<div id="wwgrp_email.senderFirstName" class="wwgrp">');
		E.push('				<div id="wwlbl_email.senderFirstName" class="wwlbl">');
		E.push('					<label  for="email.senderFirstName" class="label">Your first name *:</label>');
		E.push("				</div>");
		E.push("				<br />");
		E.push('				<div id="wwctrl_email.senderFirstName" class="wwctrl">');
		E.push('					<input type="text" name="email.senderFirstName" value="" id="email.senderFirstName" class="required nicetext" style="width:200px"/>');
		E.push("				</div>");
		E.push("			</div>");
		E.push('			<div id="wwgrp_email.senderLastName" class="wwgrp">');
		E.push('				<div id="wwlbl_email.senderLastName" class="wwlbl">');
		E.push('					<label  for="email.senderLastName" class="label">Your last name*:</label>');
		E.push("				</div>");
		E.push("				<br />");
		E.push('				<div id="wwctrl_email.senderLastName" class="wwctrl">');
		E.push('					<input type="text" name="email.senderLastName" value="" id="email.senderLastName" class="required nicetext" style="width:200px"/>');
		E.push("				</div>");
		E.push("			</div>");
		E.push('			<div id="wwgrp_email.sender" class="wwgrp">');
		E.push('				<div id="wwlbl_email.sender" class="wwlbl">');
		E.push('					<label  for="email.sender" class="label">Your email address *:</label>');
		E.push("				</div>");
		E.push("				<br />");
		E.push('				<div id="wwctrl_email.sender" class="wwctrl">');
		E.push('					<input type="text" name="email.sender" value="" id="email.sender" class="required email" style="width:200px"/>');
		E.push("				</div>");
		E.push("			</div>");
		E.push('			<div id="wwgrp_email.recipientName" class="wwgrp">');
		E.push('				<div id="wwlbl_email.recipientName" class="wwlbl">');
		E.push('					<label  for="email.recipientName" class="label">Your friend&rsquo;s name *:</label>');
		E.push("				</div>");
		E.push("				<br />");
		E.push('				<div id="wwctrl_email.recipientName" class="wwctrl">');
		E.push('					<input type="text" name="email.recipientName" value="" id="email.recipientName" class="required nicetext" style="width:200px"/>');
		E.push("				</div>");
		E.push("			</div>");
		E.push('			<div id="wwgrp_email.recipient" class="wwgrp">');
		E.push('				<div id="wwlbl_email.recipient" class="wwlbl">');
		E.push('					<label  for="email.recipient" class="label">Your friend&rsquo;s email address *:</label>');
		E.push("				</div>");
		E.push("				<br />");
		E.push('				<div id="wwctrl_email.recipient" class="wwctrl">');
		E.push('					<input type="text" name="email.recipient" value="" id="email.recipient" class="required email" style="width:200px"/>');
		E.push("				</div>");
		E.push("			</div>");
		E.push('			<div id="wwgrp_email.personalMessage" class="wwgrp">');
		E.push('				<div id="wwlbl_email.personalMessage" class="wwlbl">');
		E.push('					<label  for="email.personalMessage" class="label">A short message:</label>');
		E.push("				</div>");
		E.push("				<br />");
		E.push('				<div id="wwctrl_email.personalMessage" class="wwctrl">');
		E.push('					<textarea name="email.personalMessage" cols="35" rows="4" id="email.personalMessage"></textarea>');
		E.push("				</div>");
		E.push("			</div>");
		E.push("		</fieldset>");
		E.push('		<fieldset class="keepInformed bordered">');
		E.push("			Please keep me informed about Premier Inn news in the following countries:");
		E.push('			<div id="wwgrp_newsletter_regionPreferences" class="wwgrp">');
		E.push('				<div id="wwctrl_newsletter_regionPreferences" class="wwctrl">');
		E.push('					<input type="checkbox" name="newsletter.regionPreferences" value="1" id="newsletter.regionPreferences-1" checked="checked"/>');
		E.push('					<label for="newsletter.regionPreferences-1" class="checkboxLabel">UK &amp; Ireland</label>');
		E.push('					<input type="checkbox" name="newsletter.regionPreferences" value="2" id="newsletter.regionPreferences-2"/>');
		E.push('					<label for="newsletter.regionPreferences-2" class="checkboxLabel">Dubai</label>');
		E.push('					<input type="checkbox" name="newsletter.regionPreferences" value="3" id="newsletter.regionPreferences-3"/>');
		E.push('					<label for="newsletter.regionPreferences-3" class="checkboxLabel">India</label>');
		E.push("				</div>");
		E.push("			</div>");
		E.push("		</fieldset>");
		E.push('		<p class="sendToFriendPrivacy"><a href="/pi/en/privacy.html" onclick="this.target=\'_blank\'">Privacy Policy</a></p>');
		E.push('		<fieldset style="float:right">');
		E.push('			<button type="submit" class="book-map-search-button">Send</button>');
		E.push('			<span class="sendToAFriendThrobber"><img src="/assets/images/throbber.gif" alt=""/></span>');
		E.push('			<span class="sendToAFriendStatus"></span>');
		E.push("		</fieldset>");
		E.push('		<div class="clearfix"></div>');
		E.push("	</form>");
		E.push('	<div class="sendToAFriendResult"></div>');
		E.push("</div>");
		var C = "";
		A(E).each(function () {
			C += this
		});
		A("body").append(A.el("div").addClass("htmlLibrary").html(C));
		var D = A.el("input").attr({
			type: "hidden",
			name: "emailType",
			value: "news"
		}),
			F = document.location.pathname,
			B = A.el("input").attr({
				type: "hidden",
				name: "pageUrlSuffix",
				value: F
			});
		A(".htmlLibrary .sendToAFriend .insertfields").append(D).append(B);
		A(".sendToAFriendThrobber").hide();
		G.click(function () {
			A("div.sendToAFriend").sendToAFriendPopup();
			return false
		});
		return this
	};
	A.fn.pagelinkoverlay = function (C) {
		var B = A(this);
		if (!this.length) {
			return this
		}
		if (!C) {
			return this
		}
		return this.each(function () {
			if (A("#link-container").length < 1) {
				var E = A.el("div").addClass("link-container").attr("id", "link-container"),
					I = A.el("div").addClass("close"),
					L = A.el("div").addClass("top"),
					J = A.el("div").addClass("btm"),
					G = A.el("div").addClass("main clearfix"),
					K = A.el("h3").html(I18N.SOCIAL.LINK_TITLE),
					H = encodeURI(document.title).replace(/ /g, "%20"),
					F = (C),
					M = A.el("div").addClass("mask");
				var D = A.el("input").attr({
					type: "text",
					value: F,
					id: "pageLinkInp"
				});
				A("body").append(E.append(I).append(L).append(G.append(K).append(D)).append(J).hide());
				B.click(function () {
					var O = A(this).offset(),
						P = A(this).width(),
						N = A(this).height();
					var Q = {};
					Q.top = O.top + (N / 2) - 122;
					Q.left = O.left + (P / 2) - 128;
					A(".mask").show();
					A("#link-container").css({
						top: (Q.top),
						left: (Q.left),
						position: "absolute",
						"z-index": "2000"
					}).fadeIn("slow");
					return false
				});
				if (A(".mask").length < 1) {
					A("body").append(M)
				}
				A(".mask").click(function () {
					A("#link-container").fadeOut("fast");
					A(this).hide()
				})
			}
		})
	};
	A.fn.sharelinkoverlay = function (D) {
		var C = A(this);
		if (!this.length) {
			return this
		}
		D = (typeof D === "undefined") ? "" : D;
		var B = (I18N.SOCIAL.TITLE).replace(/\{o\}/g, D);
		return this.each(function () {
			if (A("#share-container").length < 1) {
				var E = A.el("div").addClass("share-container").attr("id", "share-container"),
					O = A.el("div").addClass("top"),
					K = A.el("div").addClass("close"),
					L = A.el("div").addClass("btm"),
					H = A.el("div").addClass("main clearfix"),
					N = A.el("h3").html(B),
					M = A.el("ul").addClass("left"),
					I = A.el("ul").addClass("right"),
					J = encodeURI(document.title).replace(/ /g, "%20"),
					F = encodeURIComponent(document.location.href),
					P = A.el("div").addClass("mask");
				var G = [{
						className: "fb",
						innerText: I18N.SOCIAL.FACEBOOK,
						link: "http://www.facebook.com/sharer.php?u={u}&t={t}"
					}, {
						className: "tw",
						innerText: I18N.SOCIAL.TWITTER,
						link: "http://twitter.com/share?url={u}&via=premierinn&text={t}"
					}, {
						className: "fv",
						innerText: I18N.SOCIAL.FAVOURITE,
						link: "javascript:xbAddFavorite('{u}','{t}',this)"
					}, {
						className: "ig",
						innerText: I18N.SOCIAL.IGOOGLE,
						link: "https://www.google.com/bookmarks/mark?op=add&bkmk={u}&title={t}"
					}, {
						className: "dl",
						innerText: I18N.SOCIAL.DELICIOUS,
						link: "http://del.icio.us/post?url={u}&title={t}"
					}, {
						className: "su",
						innerText: I18N.SOCIAL.STUMBLEUPON,
						link: "http://www.stumbleupon.com/submit?url={u}&title={t}"
					}, {
						className: "dg",
						innerText: I18N.SOCIAL.DIGG,
						link: "http://digg.com/submit?url={u}&title={t}"
					}, {
						className: "rd",
						innerText: I18N.SOCIAL.REDDIT,
						link: "http://reddit.com/submit?url={u}&title={t}"
					}];
				window.xbAddFavorite = function (Q, S, R) {
					S = window.title;
					Q = document.location.href;
					if (window.sidebar) {
						window.sidebar.addPanel(S, Q, "")
					} else {
						if (window.external) {
							window.external.AddFavorite(Q, S)
						} else {
							if (window.opera && window.print) {
								R.setAttribute("href", Q);
								R.setAttribute("title", S);
								R.setAttribute("rel", "sidebar");
								R.click()
							}
						}
					}
				};
				A("body").append(E.append(K).append(O).append(H.append(N).append(M).append(I)).append(L).hide());
				if (A(".mask").length < 1) {
					A("body").append(P)
				}
				A(".close", "#link-container").live("click", function () {
					A(".mask").click()
				});
				A(".mask").click(function () {
					A("#share-container").fadeOut("fast");
					A(this).hide()
				});
				A(".close", "#share-container").live("click", function () {
					A(".mask").click()
				});
				A(G).each(function (S) {
					var Q = this.link.replace(/{u}/gi, F).replace(/{t}/gi, J),
						R = (S < 4) ? M : I,
						T = A.el("li").addClass(this.className).html(A.el("a").html(this.innerText).attr("href", Q));
					R.append(T)
				});
				if (!(window.sidebar) && !(window.external) && !(window.opera && window.print)) {
					A("li.fv", "#share-container").remove();
					window.xbAddFavorite = null
				}
				A("a", E).live("click", function () {
					if (this.href.indexOf("javascript") < 0) {
						return !window.open(this.href, "shareWin", "status=0,menubar=0,location=0,width=600,height=400")
					} else {
						return true
					}
				})
			}
			A(this).click(function () {
				var R = A(this).offset(),
					S = A(this).width(),
					Q = A(this).height();
				var T = {};
				T.top = R.top + (Q / 2) - 170;
				T.left = R.left + (S / 2 - 128);
				A(".mask").show();
				A("#share-container").css({
					top: (T.top),
					left: (T.left),
					position: "absolute",
					"z-index": "2000"
				}).fadeIn("slow");
				return false
			})
		})
	};
	A.fn.roundedcorners = function (B) {
		var C = A(this);
		if (!this.length) {
			return this
		}
		if (typeof B !== "object" || B.length < 1) {
			B = ["tl", "tr", "bl", "br"]
		}
		var D = A.el("span");
		A.each(B, function (E, F) {
			D.prepend(A.el("span").addClass(F))
		});
		return this.each(function () {
			A(this).prepend(D.html())
		})
	};
	A.fn.tooltipinit = function () {
		if (!A(".tooltip-link", "#body-inner").length) {
			return
		}
		var B = function () {
			A(".tooltip").fadeOut(200, function () {
				A(this).remove()
			})
		};
		A(".tooltip-close").live("click", function () {
			A(this).closest(".tooltip").fadeOut(200, function () {
				A(this).remove()
			});
			return false
		});
		A(".tooltip-link").live("click", function (I) {
			var E = A(".tooltip");
			if (E.length) {
				B()
			}
			var L = A(this);
			var H = L.offset(),
				J = H.left,
				F = H.top;
			var K = L.attr("alt");
			var C = L.attr("name");
			if (C) {
				var G = 'input[name="cqtt' + C + '"]';
				var D = A(G);
				if (D.length) {
					K = D.val()
				}
			}
			A("#tooltip").tmpl({
				bodyText: K
			}).appendTo("body").css({
				left: (J + 15) + "px",
				top: (F - 20) + "px"
			}).fadeIn(200);
			return false
		});
		A(document).bind("click", function (E) {
			var C = A(E.target),
				D = ".tooltip";
			if (!C.hasClass("tooltipSelector") && !C.hasClass("tooltip-link") && C.parents(D).length <= 0) {
				B()
			}
		})
	};
	A.fn.dcCheckbox = function () {
		return this.each(function () {
			var E = A(this),
				D = A.el("div"),
				C = A.el("label"),
				B = A.el("input").attr({
					type: "checkbox",
					name: "bookingoption",
					value: "explorecalendar",
					"class": "fsFlex",
					onClick: "sc_trackDCC(this);"
				});
			E.css("visibility", "visible").append(D);
			C.append(B);
			D.append(C);
			C.append("Dates flexible? (Find best price)");
			A("input", ".home-radios").live("change", function () {
				var K = A(this).closest("form"),
					M = A(this).closest("fieldset"),
					F = A("input:checked", M).val(),
					I = A(".booking-note", K),
					H = I.next("div"),
					J = A(".search-chk-col, h2.refine", K),
					G = A("#sideBarSubmit", K),
					L = A(".children_beds", K);
				if (F === "explorecalendar") {
					L.slideUp("slow");
					H.slideUp("slow");
					I.slideDown("slow").show(function () {
						A(this).show()
					});
					J.slideUp("slow");
					G.slideUp("slow")
				} else {
					L.slideDown("slow");
					I.slideUp("slow");
					H.slideDown("slow");
					J.slideDown("slow");
					G.slideDown("slow")
				}
				return true
			});
			A.fn.controlDcCheckbox()
		})
	};
	A.fn.controlDcCheckbox = function () {
		var B = A('.availability-form-tick-box-flags input[name="defaultTickBox"]');
		var C = A('.availability-form-tick-box-flags input[name="disableTickBox"]');
		if (B.length > 0 && B.val() === "true") {
			A("input.fsFlex").attr("checked", "checked");
			A("input", ".home-radios").change()
		}
		if (C.length > 0 && C.val() === "true") {
			A("input.fsFlex").bind("click", function (D) {
				D.preventDefault()
			});
			A(".home-radios").die("change")
		}
	};
	A.fn.dcCheckboxHome = function () {
		this.each(function () {
			var E = A(this),
				D = A.el("div"),
				C = A.el("label").attr("for", "fsFlex"),
				B = A.el("input").attr({
					type: "checkbox",
					name: "bookingoption",
					value: "explorecalendar",
					id: "fsFlex",
					className: "fsFlex",
					onClick: "sc_trackDCC(this)"
				});
			E.css("visibility", "visible");
			E.append(D);
			D.html(B);
			D.append(C);
			C.append("Dates flexible? (Find best price)");
			A(".home-radios").live("change", function () {
				var I = A(this);
				var F = A("input:checkbox:checked", this).val();
				var G = A(".secondary fieldset, .secondary select,	.secondary h3, #lhSearch_1, .secondary h4, #bookHotelCheckAvailability_1, .lhmenu-btm.print-not, #lhSearch .lhmenu-btm, #hotelDetailsCheckAvailability-LH_1, .secondary .depart-date, .quick-home-footnote, #search_1"),
					H = A(".booking-note");
				if (F === "explorecalendar") {
					A(G).fadeTo("slow", 0);
					A(".secondary select").delay(100).queue(function (J) {
						A(this).hide();
						J()
					});
					A("#lhSearch_1").hide().attr("disabled", "disabled").css("cursor", "default");
					A(H).fadeTo("slow", 1)
				} else {
					A(G).fadeTo("slow", 1);
					H.fadeTo("slow", 0);
					A(".secondary select").show();
					A("#lhSearch_1").show();
					A("#lhSearch_1").removeAttr("disabled").css("cursor", "hand");
					H.css("display", "none")
				}
			})
		});
		A.fn.controlDcCheckbox();
		return this
	}
})(jQuery);
(function (B, A) {
	function D(F) {
		return F
	}
	function C(F) {
		return decodeURIComponent(F.replace(E, " "))
	}
	var E = /\+/g;
	B.cookie = function (N, M, L) {
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(M)) || M == null)) {
			L = B.extend({}, B.cookie.defaults, L);
			if (M == null) {
				L.expires = -1
			}
			if (typeof L.expires === "number") {
				var K = L.expires,
					J = L.expires = new Date;
				J.setDate(J.getDate() + K)
			}
			M = String(M);
			return A.cookie = [encodeURIComponent(N), "=", L.raw ? M : encodeURIComponent(M), L.expires ? "; expires=" + L.expires.toUTCString() : "", L.path ? "; path=" + L.path : "", L.domain ? "; domain=" + L.domain : "", L.secure ? "; secure" : ""].join("")
		}
		L = M || B.cookie.defaults || {};
		var I = L.raw ? D : C;
		var H = A.cookie.split("; ");
		for (var G = 0, F; F = H[G] && H[G].split("="); G++) {
			if (I(F.shift()) === N) {
				return I(F.join("="))
			}
		}
		return null
	};
	B.cookie.defaults = {}
})(jQuery, document);
/**
 * A dedicated js file to handle MVT variants
 * 
 * NOTE: NEVER EVER ACTIVATE IT IN PRELIVE OR LIVE PACKAGE
 * 
 * add "-Pdeveloper" to Maven build to activate it.
 */

// get url parameter based on string
function getURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

// place html code snippet into the first mbox of the page

function placeHtmlToMbox(selector, htmlCode) {
	$(htmlCode).appendTo(selector);
	// $(selector).append(htmlCode);
}

function placeJSReferenceToMbox(selector, type, src) {
	var script = $('<script/>').attr('type', type).attr('src', src);
	$(selector).append(script);
}

//place js code snippet into the first mbox of the page

function placeJsToMbox(selector, jsCode) {
	var str = "<script type='text/javascript'>";
	str += jsCode;
	str += "<";
	str += "/script>";
	//$(str).appendTo(selector);
	$(selector).append(str);
}

function verifyArrivalYearAndMonth(yearAndMonth, day) {
	var arrivalDate = yearAndMonth + day;
	var today = new Date();
	var currentDate = today.getFullYear() + "" + (today.getMonth() < 9 ? ("0" + (today.getMonth() + 1)) : (today.getMonth() + 1)) + "" + (today.getDate() < 10 ? ("0" + today.getDate()) : today.getDate());

	if (parseInt(arrivalDate, 10) < parseInt(currentDate, 10)) {
		return today.getFullYear() + "" + (today.getMonth() < 9 ? ("0" + (today.getMonth() + 1)) : (today.getMonth() + 1));
	} else {
		return yearAndMonth;
	}
}

function verifyArrivalDay(yearAndMonth, day) {
	var arrivalDate = yearAndMonth + day;
	var today = new Date();
	var currentDate = today.getFullYear() + "" + (today.getMonth() < 9 ? ("0" + (today.getMonth() + 1)) : (today.getMonth() + 1)) + "" + (today.getDate() < 10 ? ("0" + today.getDate()) : today.getDate());

	if (parseInt(arrivalDate, 10) < parseInt(currentDate, 10)) {
		return today.getDate() < 10 ? ("0" + today.getDate()) : today.getDate();
	} else {
		return day;
	}
}

(function (A, B) {
	B.mvt = B.mvt || {};
	A.extend(B.mvt, {
		getCampaign: function (C) {
			return this[C]
		},
		initCampaign: function (E, C, D) {
			var F = B.mvt.getCampaign(C);
			if (F) {
				F.variant = D;
				F.funnelTag = E;
				F.init()
			}
			return F
		}
	})
})(jQuery, window.PI = window.PI || {});
(function (C) {
	var B = "/assets/",
		A = B + "templates/mvt/";
	PI.mvt.Campaign = function (D) {
		C.extend(this, D)
	};
	PI.mvt.Campaign.prototype = {
		variant: "",
		initialize: function () {
			this.$el = C('<div id="mvt__template" />').hide();
			this.addClassName()
		},
		getIdentifier: function () {
			return this.variant ? this.name + "--" + this.variant : this.name
		},
		addClassName: function () {
			var D = " mvt__" + this.name + " mvt__" + this.getIdentifier(),
				E = document.documentElement;
			E.className = E.className + D
		},
		getTemplate: function (D) {
			this.$el.load(A + this.name + ".html", D)
		},
		insertHiddenInputs: function (E) {
			var F = C("form");
			for (var D in E) {
				if (E.hasOwnProperty(D)) {
					F.append('<input type="hidden" name="' + D + '" value="' + E[D] + '" />')
				}
			}
		}
	}
})(jQuery);
(function () {
	PI.mvt["3-2-bookingflow"] = new PI.mvt.Campaign({
		name: "3-2-bookingflow",
		init: function () {
			var A = this;
			this.initialize();
			$(function () {
				A.$bookingNav = $(".booking-nav");
				switch (A.variant) {
				case "B":
					A.backToResults();
					A.simpleFooter();
					break;
				case "C":
					A.cloneContinue();
					A.backToResults();
					A.simpleFooter();
					break;
				case "D":
					A.backToResults();
					A.readOnlyBooking();
					A.removePromo();
					A.simpleFooter();
					break;
				case "E":
					A.backToResults();
					A.removePromo();
					A.simpleFooter();
					break
				}
				A.insertHiddenInputs({
					funnelTag: A.variant
				})
			});
			return this
		},
		simpleFooter: function () {
			var A = $("#footer-container"),
				B;
			B = $($("#tmpl-3-2-bookingflow-simplefooter").html());
			A.append(B);
			B.find("a").each(function (D) {
				var C = $(this);
				if (C.hasClass("visa-popup")) {
					C.dialoginit($(".visa-popup-content"))
				}
				if (C.hasClass("mastercard-popup")) {
					C.dialoginit($(".mastercard-popup-content"))
				}
				if (C.hasClass("verisign-popup")) {
					C.dialoginit($(".verisign-popup-content"))
				}
				if (C.hasClass("cch-popup")) {
					C.dialoginit($(".cch-popup-content"))
				}
			})
		},
		cloneContinue: function () {
			var A = this.$bookingNav.find(".bs-book-button");
			if (A.length === 0) {
				var D = $("#hidden_form").clone().attr("id", "hidden_form_clone").addClass("booking-form-continue-top"),
					C = D.find(".button-rounded");
				this.$bookingNav.append(D);

				function B(E) {
					return function () {
						C.toggleClass("button-roundedActive", E)
					}
				}
				C.hover(B(true), B(false))
			}
		},
		readOnlyBooking: function () {
			var D = $("#hidden_form"),
				C = $(".lhs-container"),
				B = C.find(">lhmenu-container>.lhmenu-top > .lhs-availability-form"),
				F = D.length ? D.serializeObject() : null,
				E, G = $("#tmpl-3-2-bookingflow-booking"),
				A;
			if (F && G.length && !B.length) {
				E = F.availabilityModel.selectedMonthAndYear.replace(/(\d{4})(\d{2})/, "$1-$2-") + F.availabilityModel.day;
				F.arrivalDate = Date.parse(E).toString("ddd, dd MMM yy");
				A = G.length ? G.tmpl(F) : "";
				if (A) {
					$(".lhs-container .justforbusiness").after(A)
				}
			}
		},
		removePromo: function () {
			$("#promo-container").remove();
			$("p.pdf-warning").remove();
			$("div.secure").remove()
		},
		backToResults: function () {
			var B = $(".back_link"),
				C = $("#search"),
				A = $("#hidden_form .bs-book-button");

			function D(E) {
				C[0].submit();
				E.preventDefault()
			}
			if (C.length && !B.length) {
				$('<a class="back_link" href="javascript:void();">Back to search results</a>').insertBefore(this.$bookingNav).click(D).clone().insertBefore(A).click(D)
			}
		}
	})
})(jQuery);
(function (A) {
	A.extend(PI.omniture, {
		getAccount: function () {
			if (document.location.hostname.indexOf("premierinn.com") !== -1) {
				return "whitpreminnprod"
			} else {
				return "whitpreminndev"
			}
		},
		getPageValues: function () {
			var B;
			if (!this.pageValues) {
				this.pageValues = {};
				B = A("#submitCheckinDetails,#processCheckinExtra,#saveCheckInPreference").serializeObject();
				A.extend(true, this.pageValues, B)
			}
			return this.pageValues
		},
		track: function (B, D) {
			s = s_gi(this.getAccount());
			for (var C in B) {
				if (B.hasOwnProperty(C)) {
					s[C] = B[C]
				}
			}
			if (D) {
				s.tl()
			} else {
				s.t()
			}
			return true
		}
	});
	window.onClickTracking = function (B, C) {
		PI.omniture.track(B, C);
		return true
	}
})(jQuery);

function getURLParameter(A) {
	var D = window.location.search.substring(1);
	var C = D.split("&");
	for (var B = 0; B < C.length; B++) {
		var E = C[B].split("=");
		if (E[0] == A) {
			return E[1]
		}
	}
}
function placeHtmlToMbox(A, B) {
	$(B).appendTo(A)
}
function placeJSReferenceToMbox(A, C, D) {
	var B = $("<script/>").attr("type", C).attr("src", D);
	$(A).append(B)
}
function placeJsToMbox(A, B) {
	var C = "<script type='text/javascript'>";
	C += B;
	C += "<";
	C += "/script>";
	$(A).append(C)
}
function verifyArrivalYearAndMonth(D, C) {
	var E = D + C;
	var B = new Date();
	var A = B.getFullYear() + "" + (B.getMonth() < 9 ? ("0" + (B.getMonth() + 1)) : (B.getMonth() + 1)) + "" + (B.getDate() < 10 ? ("0" + B.getDate()) : B.getDate());
	if (parseInt(E, 10) < parseInt(A, 10)) {
		return B.getFullYear() + "" + (B.getMonth() < 9 ? ("0" + (B.getMonth() + 1)) : (B.getMonth() + 1))
	} else {
		return D
	}
}
function verifyArrivalDay(D, C) {
	var E = D + C;
	var B = new Date();
	var A = B.getFullYear() + "" + (B.getMonth() < 9 ? ("0" + (B.getMonth() + 1)) : (B.getMonth() + 1)) + "" + (B.getDate() < 10 ? ("0" + B.getDate()) : B.getDate());
	if (parseInt(E, 10) < parseInt(A, 10)) {
		return B.getDate() < 10 ? ("0" + B.getDate()) : B.getDate()
	} else {
		return C
	}
};
(function (A) {
	PI.utils.eventMixin = {
		bind: function () {
			var B = A(this);
			B.bind.apply(B, arguments)
		},
		trigger: function () {
			var B = A(this);
			B.trigger.apply(B, arguments)
		}
	};
	A.extend(PI, PI.utils.eventMixin)
})(jQuery);
(function (A) {
	PI.utils.numberOfBookingSteps = function () {
		var B = A(".two-booking-steps").length,
			D = A(".three-booking-steps").length,
			C = A(".four-booking-steps").length;
		if (B) {
			return 2
		}
		if (D) {
			return 3
		}
		if (C) {
			return 4
		}
	}
})(jQuery);
(function (B) {
	PI.utils.uniqueFields = function A(C, F) {
		var E = [],
			D = true;
		B.each(F, function (H, G) {
			E.push(B.map(C, function (J) {
				var I = G[J];
				I = B.isFunction(I) ? I() : I;
				if (I) {
					I = I.toString().toLowerCase()
				}
				return I
			}).join("|"))
		});
		B.each(E, function (H, G) {
			var I = B.map(E, function (J) {
				return G === J ? null : J
			});
			if (I.length !== E.length - 1) {
				D = false;
				return false
			}
		});
		return D
	}
})(jQuery);
(function (A, B) {
	B.components.countryList = {
		init: function () {
			if (this.initialised) {
				return
			}
			this.initialised = true;
			A("select.country").countryList()
		}
	};
	A.fn.countryList = function () {
		return this.each(function () {
			var E = A(this),
				C = E.closest("fieldset").find("input.postcode"),
				D;

			function F() {
				if (E.val() != "GB") {
					D.hide()
				} else {
					D.show()
				}
			}
			if (C.length) {
				D = A('label[for="' + C[0].id + '"] .required');
				F();
				E.change(F)
			}
		})
	}
})(jQuery, window.PI = window.PI || {});
(function (A) {
	PI.components.dialog = {
		init: function () {
			A("label a.tc").popuplink()
		}
	}
})(jQuery);
(function (A) {
	PI.components.forms = {
		init: function () {
			this.doubleSubmission();
			if (A.fn.hint) {
				A("[placeholder]").hint()
			}
		},
		doubleSubmission: function () {
			var C = ["prepareCheckinOnline\\.action", "processAmendABooking!execute\\.action"].join("|"),
				B = new RegExp(C);
			A("form").each(function () {
				var D = A(this);
				if (B.test(this.action)) {
					D.preventDoubleSubmit()
				}
			})
		}
	}
})(jQuery);
(function (A) {
	var B = 'input[name*="selectedUpsellsByRoom"]';

	function C(F) {
		F.preventDefault();
		var D = A(".back-hidden-form"),
			E = A("#processCheckinExtra " + B).clone().hide();
		if (!D.find(B).length) {
			D.append(E)
		}
		D.submit()
	}
	window.PI.components.back_link = {
		init: function (D) {
			D = D || "p.back_link a, a.back_link";
			A(D).unbind("click.back_link").bind("click.back_link", C)
		}
	}
})(jQuery);
(function (D) {
	var C, B, A;
	window.PI.components.loginForm = {
		settings: {
			greatNightGiveawayPromoActivated: false,
			greatNightGiveAwayQualified: false,
			emailRegistered: false,
			content: {}
		},
		init: function (F) {
			var E = this;
			this.$bookingForm = D(".booking-form");
			this.$loginOption = this.$bookingForm.find(".login-js");
			this.$loginEmail = this.$bookingForm.find(".login-email-form");
			this.$loginTinaForm = this.$bookingForm.find(".login-tina-form");
			this.$loginTina = D(".login-tina");
			C = D("#tmpl-tina-login-info-box").html();
			B = D("#tmpl-email-login-info-box").html();
			A = D("#tmpl-login-error-container").html();
			D.extend(this.settings, F);
			this.$loginOption.show();
			this.$loginEmail.hide();
			this.$loginTinaForm.hide();
			this.$loginTina.hide();
			this.$loginEmail.append(C);
			this.$loginTina.append(B);
			D("#whats-remember-me").css("display", "none");
			D(".show-email-login").click(function () {
				D("#loginbutton-email").hide();
				D(".booking-form .login-email-form").show();
				D(".login-tina, .login-email").stop(true, true);
				D(".login-email").hide();
				D(".login-tina").fadeOut("normal", function () {
					D(".login-email").fadeIn("normal")
				});
				return false
			});
			D(".show-tina-login").click(function () {
				D("#loginbutton-tina").hide();
				D(".booking-form .login-tina-form").show();
				D(".login-email, .login-tina").stop(true, true);
				D(".login-tina").hide();
				D(".login-email").fadeOut("normal", function () {
					D(".login-tina").fadeIn("normal")
				});
				return false
			});
			D("#loginbutton1").click(function () {
				D("#loginbutton1").hide();
				D(".login-email-form").show("normal");
				return false
			});
			if (E.emailRegistered) {
				D("#loginbutton1").trigger("click")
			}
			this.initSubmission()
		},
		initSubmission: function () {
			var E = this;
			D(".loginform").submit(function () {
				var H = D(this);
				H.find(".activityIndicator").html('<img src="' + CQ_ASSETS_URL + 'images/throbber.gif"/>');
				D(".warningtxt").remove();
				var F = D(this).find("input").serialize();
				var G = D(this).find("input[name=j_username]").val();
				D.ajax({
					type: "POST",
					url: SITE_PATH + "/mypremierinn/j_spring_security_check?ajax=true",
					data: F,
					dataType: "text",
					success: function (K, I) {
						if (K.indexOf("error") > -1) {
							D(".fmrintrotxt").after(A);
							H.find(".activityIndicator").html("")
						} else {
							D.ajax({
								type: "GET",
								url: SWS_URL + "accountService/currentUser/",
								dataType: "json",
								success: function (L) {
									window.GLOBAL_LOGGED_IN = true;
									window.GLOBAL_USERNAME = G;
									D(".utils", "#nav-container").loginutils();
									D("#module-wrap-login, #module-wrap-gng-login, .module_wrap_greatnight").stop(true, true).slideUp();
									sessionTimeout.initialize();
									D(".greatnight-promo").hide();
									D(".greatnight-loggedpromo").show();
									D(".addressLine1").val("");
									D(".addressLine2").val("");
									D(".addressLine3").val("");
									D(".addressLine4").val("");
									D(".addressLine5").val("");
									D(".postcode").val("");
									D(".companyName").val("");
									D.each(L, function (M, N) {
										if ((L[M] !== "") && (D("." + M))) {
											if (typeof L[M] === "object") {
												D.each(L[M], function (O, P) {
													if ((P !== "") && (D("." + O))) {
														D("." + O).val(P)
													}
													if (O === "wantSmsConfirmations") {
														if (P === true) {
															D("#textme").attr("checked", "checked")
														} else {
															D("#textme").attr("checked", "")
														}
													} else {
														if (O === "electronicInvoiceRequired") {
															D("form#yourDetails input[name$=.electronicInvoicePreference]").each(function () {
																var Q = D(this);
																if (Q.val() === P.toString()) {
																	Q.attr("checked", "checked")
																}
															})
														} else {
															if (O === "telephone") {
																D(".phonegroup input").removeClass("mobileback telephoneback")
															} else {
																if (O === "mobile") {
																	D("#mob").keyup()
																}
															}
														}
													}
												})
											} else {
												if (M === "typeOfAddress") {
													D("form#yourDetails input[name$=.addressType]").each(function () {
														var O = D(this);
														if (O.val() === N) {
															O.attr("checked", "checked")
														}
													})
												} else {
													if (M === "companyName") {
														D("." + M).val(N)
													}
												}
											}
										}
									});
									H.find(".activityIndicator").html("");
									if (D('input[name*="addressType"]:checked').val() === "BUSINESS") {
										D("#wwgrp_yourDetails_customerDetailsModel_companyName").show()
									} else {
										D("#wwgrp_yourDetails_customerDetailsModel_companyName").hide()
									}
								}
							});
							H.find("dl").prepend('<div class="popupInfoLabel">' + I18N.TIMEOUT_POPUP.GENERAL.INFO_MESSAGE_LOGGEDIN + "</div>");
							if (E.greatNightGiveawayPromoActivated) {
								D("#customerDetailsModel-password").val("");
								D("#customerDetailsModel-confirmPassword").val("");
								D(". module_wrap_greatnight").hide();
								if (E.greatNightGiveAwayQualified) {
									window.sc_trackGNGLogin()
								} else {
									window.sc_trackNoGNGLogin()
								}
							} else {
								window.sc_trackDisabledGNGLogin()
							}
						}
						H.find(".activityIndicator").html("");
						var J = {
							linkTrackVars: "prop25,eVar24,events",
							prop25: I18N.TIMEOUT_POPUP.GENERAL.ERROR_RESPONSE,
							eVar24: I18N.TIMEOUT_POPUP.GENERAL.ERROR_RESPONSE,
							linkTrackEvents: "event5",
							events: "event5"
						};
						onClickTracking(J, true)
					},
					error: function (L, I, K) {
						H.find("dl").prepend('<div class="popupErrorLabel">' + I18N.TIMEOUT_POPUP.GENERAL.ERROR_REQUEST + "</div>");
						H.find(".activityIndicator").html("");
						var J = {
							linkTrackVars: "prop25,eVar24,events",
							prop25: I18N.TIMEOUT_POPUP.GENERAL.ERROR_REQUEST,
							eVar24: I18N.TIMEOUT_POPUP.GENERAL.ERROR_REQUEST,
							linkTrackEvents: "event5",
							events: "event5"
						};
						onClickTracking(J, true)
					}
				});
				return false
			})
		}
	}
})(jQuery);