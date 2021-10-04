import {$} from './common';

// Слайдер клиентов
if($('.js-gallery-slider').length){
	$('.js-gallery-slider').slick({
		slidesToShow: 5,
		// slidesToScroll: 5,
		infinite: true,
		centerMode: true,
		centerPadding: '0px',
		swipe:false,
		dots: true,
		appendDots: $('.js-gallery-slider-dots'),
		prevArrow: '<button id="prev" type="button" class="btn-slider btn-slider_left"><svg class="icon ic-arrow-left" width="40" height="35"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-slider btn-slider_right"><svg class="icon ic-arrow-right" width="40" height="35"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 1.5,
		// 			slidesToScroll: 1,
		// 		}
		// 	},
		// ]
	});

	$('.js-gallery-slider').find('.slick-slide.slick-active').each(function(indx, element){
		$(element).attr('data-active',indx+1);
	});

	$('.js-gallery-slider').find('.slick-arrow').on('click', function(){
		$('.js-gallery-slider').find('.slick-slide.slick-active').each(function(indx, element){
			$(element).attr('data-active',indx+1);
		});
	});
}