// Main
$(document).ready(function () {
	$('.main-carousel').owlCarousel({
		items: 1
	});
	aboutPlayVideo();
});


function aboutPlayVideo(){
	$('.about-part.section-introduction-video .introduction-video .video-box .img-cover-video').on('click',function(){
		$(this).parents('.video-box').find('#video').css({
			'height': '100%'
		})
	})
}
