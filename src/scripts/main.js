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

	// $('.about-main-carousel').owlCarousel({
	// 	items: 1,
	// 	dots: false,
	// 	nav: true
	// });
	$('.about-main-carousel').slick({
		slidesToShow: 1,
		arrows: true
	})

	customSlickSliderDummyBtn();
	customNavbarHamburger();
	sizeWindowDetect();

});


function customSlickSliderDummyBtn(){
	$('.btn-prev').on('click',function(){
		$(this).parents('.custom-slick-slider').find('.slider').find('.slick-prev').trigger('click');
	});
	$('.btn-next').on('click',function(){
		$(this).parents('.custom-slick-slider').find('.slider').find('.slick-next').trigger('click');
	});
}



function customNavbarHamburger(){
	$('#cus-hamgurger').on('click',function(){
		$(this).parents('.inner-custom-navbar').find('.custom-navbar-collapse .custom-nav').toggleClass('active');
	})
}
function toggleActiveCustomCollapseNav(){
	
}

function sizeWindowDetect(){
	$(window).resize(()=> {
		let width = window.innerWidth;
		if(width > 992){
			$('#cus-hamgurger').parents('.inner-custom-navbar').find('.custom-navbar-collapse .custom-nav').removeClass('active');
		}	
	})
}
