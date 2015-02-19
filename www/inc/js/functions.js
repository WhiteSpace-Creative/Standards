WebFont.load({
	google: { families: [] }
});
/*! jquery.cookie v1.4.0 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{a=decodeURIComponent(a.replace(g," "))}catch(b){return}try{return h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend({},c,{expires:-1})),!0):!1}});
$(function(){
	
	//$('body').placeholderTip();
});
$.fn.extend({
	placeholderTip: function(options){
		var defaults = {offset: 5, id: 'placeholder-tip', cssClass: '', cloneStyles: ['font-weight','font-size','font-family','line-height', 'padding', 'border', 'outline','margin']};
		var options = $.extend(defaults, options);
		var tip = $('#'+ options.id);
		if (tip.length === 0){ tip = $('<div id="'+ options.id +'"><div /><span /></div>').css({'position': 'absolute','z-index': 1000 }).appendTo('body').hide(); }
		$(':input[placeholder!=""]', this).focus(function (e) {
			var input = $(this);
			var inputWidth = input.outerWidth();
			var inputHeight = input.outerHeight();
			var inputPos = input.offset();
			tip.stop().hide().removeClass().addClass(options.id +'-'+ options.position +' '+options.cssClass).find('div').html(input.attr('placeholder')).end().css({ top: inputPos.top, left: inputPos.left});
			$.each(options.cloneStyles, function(item, value) { tip.css(value, input.css(value)); });
			var tipHeight = tip.outerHeight();		
			var tipWidth = tip.outerWidth();
			var animation = {top: '-='+ (tipHeight + options.offset) +'px'};
			switch (options.position) {
				case 'right': animation = {left: '+='+ (inputWidth + options.offset) +'px'}; break;
				case 'left':  animation = {left: '-='+ (tipWidth + options.offset) +'px'}; break;
				case 'bottom': animation = {top: '+='+ (inputHeight + options.offset) +'px'}; break;
			}
			$.extend(animation, { opacity: 100});
			tip.show().animate(animation);
		}).blur(function(e){ tip.hide(); });
		return this;
	},
	customInput : function(options) {
		if (!$('html').hasClass('lt-ie7')){
			return this.each(function() {
				var $this = $(this);
				if ($this.data('styled')){ return; }
				$this.data('styled', true);
				
				$this.wrap('<span class="custom-'+ (this.type ? this.type : this.tagName.toLowerCase()) +'" />');
				
				if (this.tagName.toLowerCase().indexOf('select') >= 0){
					var currentSelected = $this.find(':selected');
					$this.parent().append('<span>'+ currentSelected.text() +'</span>');
					var text = $this.next();
					$this.bind('change update', function(){
						text.text($this.find(':selected').text());
					});
				}
				else {
					$this.on('change', function(){
						if (this.type.toLowerCase() == 'radio'){
							$('input[type="radio"][name="'+ this.name +'"]').each(function(index,element){ $(this).parent().removeClass('checked'); });
						}
						else {
							$this.parent().removeClass('checked');
						}
						if ($this.attr('checked')) {  $this.parent().addClass('checked'); } 
					}).
					focus(function() { $this.parent().addClass('focus'); }).
					blur(function() { $this.parent().removeClass('focus'); });
					if ($this.attr('checked')) {  $this.parent().addClass('checked'); }
				}				
			});
		}
		return this;
	}
});