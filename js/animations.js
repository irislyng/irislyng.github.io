/* NAV SLIDE DOWN */
document.addEventListener('DOMContentLoaded', function slideDown() { 

	/* NAV SLIDE DOWN */
	var nav = document.getElementById('nav');
	if (nav.classList.contains('hide')) {
		nav.classList.remove('hide');
	}
	setTimeout(function() {
		nav.classList.add('navigation-show')
	}, 700);
}, false);

