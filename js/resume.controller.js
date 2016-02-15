(function() {
	'use strict';

	angular
		.module('app')
		.controller('ResumeController', ResumeController)

		function ResumeController(dataService) {
			var vm = this;
			vm.titles = {
				work: 'Work Experience',
				skills: 'Technical Skills',
				projects: 'Projects',
				education: 'Education',
				awards: 'Awards/Achievements'
			}


			dataService.getData('resume')
				.then(function(data) {
					vm.jobs = data.jobs;
					vm.skills = data.skills;
					vm.education = data.education;
					vm.awards = data.awards;
					vm.achievements = data.achievements;
				});

		}
})();