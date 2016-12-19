$(document).ready(function() {

	//	mobile button menu
	$('.mobile-menu').click(function() {
		$(this).toggleClass('active');
	});

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'libs/particles.json', function() {
	  
	});	
	particlesJS.load('particles-js-partnership', 'libs/particlesjs-config-last.json', function() {
	  
	});	

	particlesJS.load('particles-js-submition', 'libs/particles.json', function() {
	  
	});	

	
	

	$(window).on('load resize', function(){
		var titleImgWidth = $('.title img').width();
		$('.main_screen .offert').css('max-width', titleImgWidth);	
	})

	// smooth scroll

	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});