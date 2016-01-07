jQuery( document ).ready(function( $ ) {
	$('.recent_slider').slick({
		// autoplay: true,    
	    dots: true,
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    slidesToScroll: 1
  	});

  	$('.regiones_slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});

	$('.deportes_slider').slick({
		// autoplay: true,    
	    dots: true,
	    infinite: true,
	    speed: 300,
	    slidesToShow: 1,
	    slidesToScroll: 1
  	});

  	$('.opiniones_slider').slick({
	    dots: false,
	    infinite: true,
	    speed: 300,
	  	slidesToShow: 1,
	  	centerMode: false,
	  	variableWidth: true
	});
});