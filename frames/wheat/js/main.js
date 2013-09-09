(function() {
  "use strict";
  var wheat;

  wheat = {
    isSetup: false,
    transitionEvent: false,
    backgroundSizeProp: 'background-size',
    mobileBreakpoint: 690,
    mode: 'desktop',
    init: function() {
      var onError, onSuccess, whichBackgroundSize, whichTransitionEvent;
      onSuccess = function(location) {
        var c, checkIfShouldRedirectByCode, code, _i, _len, _ref, _results;
        code = location.country.iso_code;
        checkIfShouldRedirectByCode = function(c) {
          if (code === c) {
            document.getElementById('project-wrapper').innerHTML = '';
            window.location.replace('http://cerealpartners.co.uk/');
          }
        };
        _ref = ['US', 'UM', 'CA'];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          _results.push(checkIfShouldRedirectByCode(c));
        }
        return _results;
      };
      onError = function(error) {
        if ((typeof console !== "undefined" && console !== null) && (console.log != null)) {
          return console.log("Error:\n\n" + JSON.stringify(error, void 0, 4));
        }
      };
//       if (typeof geoip2 !== "undefined" && geoip2 !== null) {
//         geoip2.country(onSuccess, onError, {
//           w3cGeolocationDisabled: true
//         });
//       }
      whichTransitionEvent = function() {
        var el, event, t, transitions;
        el = document.body;
        transitions = {
          'transition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'MozTransition': 'transitionend',
          'webkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
          event = transitions[t];
          if (el.style[t] != null) {
            return event;
          }
        }
        return false;
      };
      whichBackgroundSize = function() {
        var bgsize, cssprop, el, prop;
        el = document.body;
        bgsize = {
          'backgroundSize': 'background-size',
          'webkitBackgroundSize': '-webkit-background-size',
          'MozBackgroundSize': '-moz-background-size',
          'OBackgroundSize': '-o-background-size'
        };
        for (prop in bgsize) {
          cssprop = bgsize[prop];
          if (el.style[prop] != null) {
            return cssprop;
          }
        }
        return false;
      };
      wheat.backgroundSizeProp = whichBackgroundSize();
      wheat.transitionEvent = whichTransitionEvent();
      if (wheat.isSetup === !true) {
        $('header .decor').bind(wheat.transitionEvent, function(e) {
          $(e.target).unbind(wheat.transitionEvent);
          return $(e.target).addClass('no-delay');
        });
      }
      $(window).on('resize load', function() {
        return wheat.isSetup = wheat.handleResize();
      });
      if (window.orientation) {
        $('#project-wrapper').addClass('no-transition');
      }
      return $(window).on('orientationchange', function(event) {
        $('#project-wrapper').addClass('no-transition');
        console.log("This device is in " + window.orientation + " mode!");
        wheat.mode = window.innerWidth > wheat.mobileBreakpoint ? 'desktop' : 'mobile';
        console.log(wheat.mode);
        return document.getElementById('project-wrapper').style.padding = wheat.mode === 'desktop' ? '0 60px' : '0 20px';
      });
    },
    handleResize: function() {
      var calcW, logow, maxW, minW, padding, spacing, w;
      w = $('#project-wrapper').width();
      logow = 270;
      spacing = 20;
      padding = 20;
      maxW = 161;
      minW = 48;
      calcW = Math.floor((w - logow - padding * 2 - spacing * 2) / 2);
      if (window.innerWidth >= 780) {
        $('header .decor').width(maxW);
        if (wheat.backgroundSizeProp) {
          $('header .decor').css(wheat.backgroundSizeProp, '48px 28px');
        }
        return true;
      } else {
        $('header .decor').width(Math.min(maxW, Math.max(calcW, minW)));
        if (wheat.backgroundSizeProp) {
          $('header .decor').css(wheat.backgroundSizeProp, '48px auto');
        }
        return true;
      }
      return false;
    }
  };

  $(wheat.init());

}).call(this);