(function() {
    'use strict';
    console.log('hello yes this is dog');
    window.presentation = {
        
        index: 0,
        length: 0,
        
        init: function() {
            //console.log(document.location.hash);
            this.length = document.querySelectorAll('#container > section').length;
            this.container = document.getElementById('container');
            this.container.className = 'loaded';
            document.addEventListener('keydown', function(e) {
                //console.log(e.keyCode);
                switch(true) {
                    case e.keyCode === 39 || e.keyCode === 40:
                        presentation.next();
                        break;
                    case e.keyCode === 37 || e.keyCode === 38:
                        presentation.prev();
                        break;
                }
                
            }, false)
        },
        
        transform: (function(offset) {
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
            var transitionProperty = getTransformProperty(document.body);
            return function(offset) {
                this.container.style[transitionProperty] = 'translate3d(0,' + offset + ',0)';
            }
        })(),
        
        goToSlide: function(ind) {
            if(ind < 0 || ind >= this.length) return;
            this.index = ind;
            this.transform(-ind*100+'%');
            
        },
        
        next: function() {
            this.goToSlide(this.index+1);
        },
        
        prev: function() {
            this.goToSlide(this.index-1);
        }
        
    }
    
    document.addEventListener("DOMContentLoaded", function(e) {
        presentation.init();
    }, false);
})();