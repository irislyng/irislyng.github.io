(function() {

	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController);


		function MainController(dataService) {
			var vm = this;

			vm.isActive = false;
			vm.current = null;
			vm.select = select;

			dataService.getData('main')
				.then(function(data) {
					vm.icons = data.icons;
					vm.contact = data.contacts;
				})


			vm.links = ['home', 'about', 'resume', 'projects'];
			function select (link) {
				vm.isActive = false;
				if(link == 'home')
					vm.current = null;
				else
					vm.current = link;
			}
		}
})();
