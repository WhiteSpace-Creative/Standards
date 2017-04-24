loadCss('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.0/css/jquery.mmenu.all.min.css');
function loadCss(e){var t=document.createElement('link');t.type='text/css',t.rel='stylesheet',t.href=e,document.getElementsByTagName('head')[0].appendChild(t)}
var WSC = WSC || {}
WSC.loadCss = loadCss;
WSC.slickDefaults = { dotsClass: 'slick-dots unstyled' };

document.documentElement.classList.remove('no-js');

// convert Google Maps into an AMD module
define('gmaps', ['async!http://maps.google.com/maps/api/js?sensor=false'], function(){
    // return the gmaps namespace for brevity
    return window.google.maps;
});

requirejs.config({
    baseUrl: 'inc/js',
    paths: {
		'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min', 'jquery.min'],
		'jquery.mmenu': 'https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.0/js/jquery.mmenu.all.min',
		'jquery.slick': 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min',
		'async': 'https://cdnjs.cloudflare.com/ajax/libs/requirejs-async/0.1.1/async'
    },
	shim: {
		'jquery.slick': { 
			deps: ['jquery'],
			exports: 'jQuery.fn.slick'
		},
		'jquery.mmenu': { 
			deps: ['jquery'],
			exports: 'jQuery.fn.mmenu'
		}
	}
});

function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

/* Global scripts */
require(['global']);

/* Page scripts */
if(hasClass(document.body, 'type-homepage')){ require(['homepage']); }
if (document.querySelectorAll('.bios').length > 0){ require(['bios']); }

// Avoid 'console' errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) { console[method] = noop; }
    }
}());
