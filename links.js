$(document).ready(function() {
	$('.header .navbar img').mouseenter(function() {
		$(this).fadeTo("fast",1);
	});

	$('.header .navbar img').mouseleave(function() {
		$(this).fadeTo("fast", 0.75);
	});
})