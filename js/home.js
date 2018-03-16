$(window).on('resize', function() {
	heroHeightCalculation();
}).trigger('resize');

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
