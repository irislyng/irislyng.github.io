(function() {
	'use strict';

	angular
		.module('app')
		.directive('subsection', function() {
			return { 
				restrict: 'A', 
				scope: { 
				  info: '=' 
				}, 
				templateUrl:'views/section.html'
			}
		});

	angular
		.module('app')
		.directive('skillsection', function() {
			return { 
				restrict: 'A', 
				scope: { 
				  info: '=' 
				}, 
				templateUrl:'views/skills.html'
			}
		});
})();