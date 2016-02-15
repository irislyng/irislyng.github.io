(function() {
	'use strict';

	angular
		.module('app')
		.controller('ProjectsController', ProjectsController);

	/* Projects Controller */

	function ProjectsController (dataService) {
		var vm = this;

		dataService.getData('projects')
			.then(function(data) {
				vm.projects = data;
			})
	}
	
})();