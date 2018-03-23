$(window).on('resize', heroHeightCalculation).trigger('resize');

$('.js-scroll-trigger').on('click', function(e) {
	var $this = $(this),
		parentSection = $this.closest('.js-scroll-section'),
		nextSection = parentSection.next('.js-scroll-section');

	$('html, body').animate({
		scrollTop: nextSection.offset().top
	}, 500);

	e.preventDefault();
});

function heroHeightCalculation() {
	var winHeight = $(window).height(),
		hero = $('.hero');

	hero.css({
		height: winHeight
	});
}


/* Isotope Filtering - Products Grid on Homepage Initialization */

var isotopeGridProductsHome = $('.js-isotopGrid').isotope({
	itemSelector: '.js-isotopGrid__item',
	layoutMode: 'fitRows'
});

$('.threeColGrid__filters__item').on('click', function(e) {
	var $this = $(this),
		filterValue = $this.attr('data-filter');

	isotopeGridProductsHome.isotope({ filter: filterValue});
	$('.threeColGrid__filters__item')
		.removeClass('threeColGrid__filters__item--active');

	$this.addClass('threeColGrid__filters__item--active');

	e.preventDefault();
});