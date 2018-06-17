import $ from 'jquery';

class Slider {
	constructor() {
		this.arrow_prev = $('.slider__arrow--prev');
		this.arrow_next = $('.slider__arrow--next');
		this.slides = $('.slider__slide');
		this.current_slide = $('.slider__slide--active');
		this.inactive_slides = $('.slider__slide--inactive');
		this.events();
	}

	events() {
		this.arrow_prev.click(this.moveSlidesBackward.bind(this));
		this.arrow_next.click(this.moveSlidesForward.bind(this));
	}

	moveSlidesForward() {
		var $activeSlide;
		var $nextSlide;
		var slideIndex = 0;
		var firstSlide;
		var prevSlide;
		var lastSlide;
		

		this.slides.each(function() {
			var $currentSlide = $(this);
			$nextSlide = $currentSlide.next();

			if ($currentSlide.hasClass('slider__slide--active')) {
				$activeSlide = $currentSlide;
			}
		});

		slideIndex = this.slides.index($activeSlide);
		$nextSlide = $activeSlide.next();
		firstSlide = this.slides.first();
		prevSlide = $activeSlide.prev();
		lastSlide = this.slides.last();

		if (slideIndex < this.slides.length - 2) {
			$activeSlide.addClass('slider__slide--inactive-left');
			$activeSlide.removeClass('slider__slide--active');
			$nextSlide.addClass('slider__slide--active');
			$nextSlide.removeClass('slider__slide--inactive-right');
			lastSlide.addClass('slider__slide--inactive-right');
			lastSlide.removeClass('slider__slide--inactive-left');
		} else if (slideIndex === this.slides.length - 2)  {
			$activeSlide.addClass('slider__slide--inactive-left');
			$activeSlide.removeClass('slider__slide--active');
			$nextSlide.addClass('slider__slide--active');
			$nextSlide.removeClass('slider__slide--inactive-right');
			prevSlide.addClass('slider__slide--inactive-right');
			prevSlide.removeClass('slider__slide--inactive-left');
		} else {
			$activeSlide.addClass('slider__slide--inactive-left');
			$activeSlide.removeClass('slider__slide--active');
			prevSlide.addClass('slider__slide--inactive-right');
			prevSlide.removeClass('slider__slide--inactive-left');
			firstSlide.addClass('slider__slide--active');
			firstSlide.removeClass('slider__slide--inactive-right');
		}		
	}

	moveSlidesBackward() {
		console.log('start moving slide backward');
		var $activeSlide;
		var $nextSlide;
		var slideIndex = 0;
		var firstSlide;
		var prevSlide;
		var lastSlide;
		

		this.slides.each(function() {
			var $currentSlide = $(this);
			$nextSlide = $currentSlide.next();

			if ($currentSlide.hasClass('slider__slide--active')) {
				$activeSlide = $currentSlide;
			}
		});

		slideIndex = this.slides.index($activeSlide);
		$nextSlide = $activeSlide.next();
		firstSlide = this.slides.first();
		prevSlide = $activeSlide.prev();
		lastSlide = this.slides.last();

		if (slideIndex < this.slides.length - 2) {
			$activeSlide.addClass('slider__slide--inactive-right');
			$activeSlide.removeClass('slider__slide--active');
			$nextSlide.addClass('slider__slide--active');
			$nextSlide.removeClass('slider__slide--inactive-left');
			lastSlide.addClass('slider__slide--inactive-left');
			lastSlide.removeClass('slider__slide--inactive-right');
		} else if (slideIndex === this.slides.length - 2)  {
			$activeSlide.addClass('slider__slide--inactive-right');
			$activeSlide.removeClass('slider__slide--active');
			$nextSlide.addClass('slider__slide--active');
			$nextSlide.removeClass('slider__slide--inactive-left');
			prevSlide.addClass('slider__slide--inactive-left');
			prevSlide.removeClass('slider__slide--inactive-right');
		} else {
			$activeSlide.addClass('slider__slide--inactive-right');
			$activeSlide.removeClass('slider__slide--active');
			prevSlide.addClass('slider__slide--inactive-left');
			prevSlide.removeClass('slider__slide--inactive-right');
			firstSlide.addClass('slider__slide--active');
			firstSlide.removeClass('slider__slide--inactive-left');
		}
		console.log('end moving slide backward');
	}
}

export default Slider;