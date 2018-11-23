'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
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
		mobileFirst: true,
		arrows: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				centerMode: true

			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
				centerMode: true
			}
		}]
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
	});

	customSlickSliderDummyBtn();
	customNavbarHamburger();
	autoRemoveHamburger();
	closeNavBarCollapse();
	autoSwitchContainer('header .custom-navbar .inner-custom-navbar');
	solidHeaderWhenScroll();
});

function customSlickSliderDummyBtn() {
	$('.btn-prev').on('click', function () {
		$(this).parents('.custom-slick-slider').find('.slider').find('.slick-prev').trigger('click');
	});
	$('.btn-next').on('click', function () {
		$(this).parents('.custom-slick-slider').find('.slider').find('.slick-next').trigger('click');
	});
}

function customNavbarHamburger() {
	$('#cus-hamgurger').on('click', function () {
		$(this).parents('.inner-custom-navbar').find('.custom-navbar-collapse .custom-nav').addClass('active');
	});
}
function closeNavBarCollapse() {
	$('#cus-closed-btn').on('click', function () {
		$(this).parents('.custom-nav').removeClass('active');
	});
}

function autoRemoveHamburger() {
	$(window).resize(function () {
		var width = window.innerWidth;
		if (width > 992) {
			$('#cus-hamgurger').parents('.inner-custom-navbar').find('.custom-navbar-collapse .custom-nav').removeClass('active');
		}
	});
}

function autoSwitchContainer(target) {
	$(window).resize(function () {
		var width = window.innerWidth;
		$(target).removeClass('container').removeClass('container-fluid');
		width > 992 ? $(target).addClass('container') : $(target).addClass('container-fluid');
	});
}
function solidHeaderWhenScroll() {
	var topPos = 0;
	$(window).scroll(function () {
		var pos = $(this).scrollTop();
		if (pos > topPos) {
			$('.custom-navbar').addClass('solid-header');
		} else {
			$('.custom-navbar').removeClass('solid-header');
		}
	});
}
//# sourceMappingURL=main.js.map
