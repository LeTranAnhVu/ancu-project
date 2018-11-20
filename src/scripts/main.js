// Main
$(document).ready(function () {

	//
	$('#about-video-slider').slick({
		focusOnSelect: true,
		dots: false,
		infinite: true,
		mobileFirst : true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: true,
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
