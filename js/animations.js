function enter() {
	/* NAV SLIDE DOWN */
	var nav = document.getElementById('nav');
	var nav_height = nav.offsetHeight + 'px';
	if (nav.classList.contains('hide')) {
		nav.classList.remove('hide');
	}

	nav.style.opacity = 0;
	nav.style.top = 0 - nav.offsetHeight + 'px';

	var slideDown = function() {
		nav.style.opacity = +nav.style.opacity + 0.04;
		nav.style.top = parseInt(nav.style.top, 10) + parseInt("2px", 10) + "px"
		if (nav.style.top < "0px") {
			(window.requestAnimationFrame && requestAnimationFrame(slideDown)) || setTimeout(slideDown, 16)
		} 
	};

	slideDown();
}