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

  	// $.ajaxSetup({ cache: true });
	  // $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
	  //   FB.init({
	  //     appId: '{your-app-id}',
	  //     version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
	  //   });     
	  //   $('#loginbutton,#feedbutton').removeAttr('disabled');
	  //   FB.getLoginStatus(updateStatusCallback);
	  //  });

	function add_target_blank(element) {
		console.log('add_target_blank', element);
		var element_length = element.length;
		if(element_length > 0){
			element.attr('target', '_blank');
			console.log('element is ready');
		}else{
			add_target_blank(element);
			console.log("element doesn't exist");
		}
	}

  	setTimeout(function(){
	//  	console.debug('facebook button', $('#facebook .pluginSkinLight'));
	// 		$('.pluginButtonLabel').html('alice');

		var twitter_link = $('.service-links .item-list ul .first a');		
		add_target_blank(twitter_link);
	}, 800);
});