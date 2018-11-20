// Main
$(document).ready(function () {

	//
	$('#about-directors-slider').slick({
		focusOnSelect: false,
		infinite: false,
		mobileFirst: true,
		slidesToShow: 1,
		// arrows: true,
		responsive: [{
			breakpoint: 0,
			setting: {
				// arrows: true
			}

		}]
	});


	$('#about-video-slider').slick({
		focusOnSelect: true,
		dots: false,
		infinite: true,
		mobileFirst : true,
		arrows: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				centerMode: true,
				
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
				centerMode: true,
				}
			}
		]
	});
	// dsfasd

	$('.about-main-carousel').owlCarousel({
		items: 1,
		dots: false,
		nav: true
	});

});
