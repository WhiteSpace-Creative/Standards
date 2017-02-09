loadCss('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.0/css/jquery.mmenu.all.min.css');
function loadCss(e){var t=document.createElement('link');t.type='text/css',t.rel='stylesheet',t.href=e,document.getElementsByTagName('head')[0].appendChild(t)}
var WSC = WSC || {}
WSC.loadCss = loadCss;

requirejs.config({
    baseUrl: 'inc/js',
    paths: {
      'jquery': ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min', 'jquery.min'],
	  'jquery.mmenu': 'https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.0/js/jquery.mmenu.all.min',
	  'slick': 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min'
    },
	shim: {
		'slick': { deps: ['jquery'] },	
		'jquery.mmenu': { deps: ['jquery'] },	
		'functions': { deps: ['jquery', 'jquery.mmenu'] },
	}
	/*,
	deps: ['jquery', 'jquery.mmenu'],
	callback: function() {
		//require(['jquery.mmenu'],function(){
			require(['functions']);
		//});
	}
	*/
});

function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}


require(['modernizr.min', 'functions'],function(){	
	if(hasClass(document.body, 'type-homepage')){ 
		loadCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
		require(['homepage']); 
	}
});

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
