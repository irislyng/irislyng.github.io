(function() {
	'use strict';

	angular
		.module('app')
		.controller('AboutController', AboutController);

	/* About Controller */

	function AboutController () {
		var vm = this;
	  	vm.img = 'img/profile.jpg';

	  	vm.about = {
			title: "About Me",
			content: [
				"My name is Iris Ng, and I'd like to welcome you to my website! I'm a student currently in my 4th year of Software Engineering and Management at McMaster University.",
				"Many people wonder what it means to be studying Software Engineering and Management. At McMaster, it's a 5 year program in which I can take several core Commerce courses to understand the business and managerial aspect of engineering. So far, it's proven to be a useful thing to know.",
				"In my free time, I enjoy spending time outdoors and doing outdoor activities, such as hiking, camping, etc. I also really enjoy watching TV shows and movies (I always have to be caught up with the latest ones). It's a bad habit, but I can't get enough of it!"
			]
	  	}
	}
})();