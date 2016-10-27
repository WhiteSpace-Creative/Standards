loadCss('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Roboto:300,300i,400,400i,700,700i');
loadCss('https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.0/css/jquery.mmenu.all.min.css');
loadCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');

requirejs.config({
    baseUrl: 'inc/js',
    paths: {
      'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min',
	  'jquery.mmenu': 'https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.0/js/jquery.mmenu.all.min',
	  'slick': 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min'
    },
	deps: ['jquery', 'slick'],
	callback: function() {
		require(['jquery.mmenu'],function(){
			require(['functions']);
		});
	}
});

function loadCss(e){var t=document.createElement('link');t.type='text/css',t.rel='stylesheet',t.href=e,document.getElementsByTagName('head')[0].appendChild(t)}