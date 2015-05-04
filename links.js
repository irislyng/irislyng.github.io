$(document).ready(function() {

	$('.header .navbar img').mouseenter(function() {
		$(this).fadeTo("fast",1);
	});

	$('.header .navbar img').mouseleave(function() {
		$(this).fadeTo("fast", 0.75);
	});

	$('#first').click(function() {
		$('.header').css("background-color", "#008161");
		$('.subsection h3').css("color", "#008161");
		$('.footer').css("color", "#008161");
	});

	$('#second').click(function() {
		$('.header').css("background-color", "#470047");
		$('.subsection h3').css("color", "#470047");
		$('.footer').css("color", "#470047");
	});	

	$('#third').click(function() {
		$('.header').css("background-color", "rgb(99,00,33)");
		$('.subsection h3').css("color", "rgb(99,00,33)");
		$('.footer').css("color", "rgb(99,00,33)");
	});

	$('#fourth').click(function() {
		$('.header').css("background-color", "#000040");
		$('.subsection h3').css("color", "#000040");
		$('.footer').css("color", "#000040");
	});

	$('#fifth').click(function() {
		$('.header').css("background-color", "#D68533");
		$('.subsection h3').css("color", "#D68533");
		$('.footer').css("color", "#D68533");
	});

})