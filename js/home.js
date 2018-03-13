$(window).on('resize', function() {
	heroHeightCalculation();
}).trigger('resize');


function heroHeightCalculation() {
	var winHeight = $(window).height(),
		hero = $('.hero');

	hero.css({
		height: winHeight
	});
}