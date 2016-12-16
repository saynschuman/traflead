$(document).ready(function() {

	//	mobile button menu
	$('.mobile-menu').click(function() {
		$(this).toggleClass('active');
	});

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'libs/particles.json', function() {
	  
	});	

	if (innerHeight < 806) {
		$('.main_screen').height(innerHeight);
	}

	$(window).resize(function(){
		if (innerHeight < 806) {
			$('.main_screen').height(innerHeight);
		}
	})


});