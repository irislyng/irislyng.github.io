(function() {
	'use strict';

	angular
		.module('app')
		.controller('ProjectsController', ProjectsController);

	/* Projects Controller */

	function ProjectsController () {
		var vm = this;
		vm.projects = [
			{
				title: 'Portfolio Website',
				location: 'http://irislyng.me',
				date: 'Dec 2014 - Present',
				description: [
					'Developed and managed personal website using AngularJS, HTML5 and CSS3',
					'Currently working to implement a dynamic website to showcase other projects'
				]
			},
			{
				title: 'CabPool Android Application',
				location: 'McMaster University, Hamilton ON',
				date: 'Sept 2014 - Dec 2014',
				description: [
					'Created an Android application which allows users to minimize the costs of taking a cab by sharing their cab fare',
					'Developed in Java on the Eclipse IDE using Parse to store user information',
					'Created requirements document outlining specifications and architecture of system'
					
				]
			},
			{
				title: 'Checkers Game',
				location: 'McMaster University, Hamilton ON',
				date: 'Jan 2014 - Apr 2014',
				description: [
					'Implemented fully functional checkers game in a group of 5 that gives users the option to play against other players or the computer',
					'Gained experience in Java, Java Swing and GUI development of computer applications',
					'Created test cases using JUnit that covered all possible outcomes of the game'
				]
			}
		]

	}
})();