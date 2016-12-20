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

	new WOW().init();

	$( "#c_n_1" ).hover(
	  function() {
	    $('.flag_6').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_6').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_2" ).hover(
	  function() {
	    $('.flag_8').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_8').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);		

	$( "#c_n_3" ).hover(
	  function() {
	    $('.flag_7').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_7').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_4" ).hover(
	  function() {
	    $('.flag_1').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_1').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_5" ).hover(
	  function() {
	    $('.flag_10').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_10').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);		

	$( "#c_n_6" ).hover(
	  function() {
	    $('.flag_4').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_4').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_7" ).hover(
	  function() {
	    $('.flag_9').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_9').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_8" ).hover(
	  function() {
	    $('.flag_12').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_12').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	


	$( "#c_n_9" ).hover(
	  function() {
	    $('.flag_3').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_3').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_10" ).hover(
	  function() {
	    $('.flag_5').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)'
	    });
	  }, function() {
	    $('.flag_5').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)'
	    });
	  }
	);	

	$( "#c_n_11" ).hover(
	  function() {
	    $('.flag_2').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)',
	    	'z-index': '99'
	    });
	  }, function() {
	    $('.flag_2').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)',
	    	'z-index': '0'
	    });
	  }
	);	


	$( "#c_n_12" ).hover(
	  function() {
	    $('.flag_11').css({
	    	transform: 'scale(1.1)',
	    	filter: 'grayscale(0)',
	    	'z-index': '99'
	    });
	  }, function() {
	    $('.flag_11').css({
	    	transform: 'scale(1)',
	    	filter: 'grayscale(100%)',
	    	'z-index': '0'
	    });
	  }
	);		



});