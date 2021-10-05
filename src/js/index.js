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

// Слайдер партнеров
if($('.js-partners-slider').length){
	$('.js-partners-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		rows: 2,
		infinite: true,
		swipe:false,
		dots: true,
		appendDots: $('.js-partners-slider-dots'),
		prevArrow: '<button id="prev" type="button" class="btn-slider btn-slider_left"><svg class="icon ic-arrow-left" width="40" height="35"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-slider btn-slider_right"><svg class="icon ic-arrow-right" width="40" height="35"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}

// Слайдер отзывов
if($('.js-reviews-slider').length){
	$('.js-reviews-slider').slick({
		infinite: true,
		swipe:false,
		dots: true,
		prevArrow: '<button id="prev" type="button" class="btn-slider btn-slider_left"><svg class="icon ic-arrow-left" width="40" height="35"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-slider btn-slider_right"><svg class="icon ic-arrow-right" width="40" height="35"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
	});
}

// Yandex карта
if ($('#map').length) {
	// Иницилизация карты
	ymaps.ready(init);

	function init(){
		var myMap;

		myMap = new ymaps.Map("map", {
			center: [55.778, 37.70],
			zoom: 16,
			controls: []
		});

		placemark('55.778398', '37.699664', 'ул. Большая Почтовая, 26в, стр. 2, Москва, Россия, 105082');
		placemark('55.780225', '37.685505', 'Центросоюзный переулок, 13с3, Москва, Россия, 105082');
		placemark('55.779150', '37.706306', 'Семёновская набережная, 5с1, Москва, Россия, 105094');

		function placemark(lat, long, text) {
			var myPlacemark = new ymaps.Placemark([lat, long] , 
				{
					balloonContentBody: text,
					hintContent: text
				},
				{
					iconLayout: 'default#image',
					iconImageHref: '/assets/img/mark-map.png',
					iconImageSize: [50, 90],
					iconImageOffset: [-25,-45],
				});
	
			myMap.geoObjects.add(myPlacemark);
		}

		

	}
}
