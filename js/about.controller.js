(function() {
	'use strict';

	angular
		.module('app')
		.controller('AboutController', AboutController);

	/* About Controller */

	function AboutController (dataService) {
		var vm = this;
	  	vm.img = 'img/profile.jpg';

	  	dataService.getData('main')
	  		.then(function(data) {
	  			vm.about = data.about;
	  		})
	}
})();