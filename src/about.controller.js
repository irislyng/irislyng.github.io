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
				"My name is Iris Ng, and I'd like to welcome you to my website! I'm a student currently in my 4th year of Software Engineering and Management at McMaster University. Software Engineering and Management is a 5 year program in which I am given the opportunity to take several core Commerce courses to understand the business and managerial aspect of engineering.",
				"Currently, I'm learning more about back-end systems in web applications so I have knowledge on the full spectrum of web development. Because I'm proficient with AngularJS, I'm reading up on the MEAN stack to expand my skills so that I can become a full-stack engineer.",
				"In my free time, besides reading up on web and application development, I enjoy spending time outdoors and participating in outdoor activities, such as hiking, camping, etc. I also really enjoy watching TV shows and movies. It's a bad habit, but I can't get enough of it!"
			]
	  	}
	}
})();