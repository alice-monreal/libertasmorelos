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
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});
});