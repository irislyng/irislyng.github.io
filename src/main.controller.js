(function() {

	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController);


		function MainController($rootScope) {
			var vm = this;

			vm.isActive = false;
			vm.current = null;
			vm.select = select;

			vm.icons = [
				{
					link: 'mailto: irislyng@gmail.com',
					img: 'img/email.png',
					target: '_self'
				},
				{
					link: 'http://github.com/irislyng',
					img: 'img/github.png',
					target: '_blank'
				},
				{
					link: 'http://ca.linkedin.com/in/irislyng',
					img: 'img/linkedin.png',
					target: '_blank'
				}
			];

			vm.links = ['home', 'about', 'resume', 'projects'];

			vm.images = {
				email: 'img/email.png' ,
				linkedin: 'img/linkedin.png',
				github: 'img/github.png'
			};

			vm.contact = {
				title: 'Contact Me',
				gmail: {
					one: 'irislyng',
					two: '@gmail',
					three: '.com'
				},
				mcmaster: {
					one: 'ngil',
					two: '@mcmaster',
					three: '.ca'
				},
				phone:  {
					one: '(289)',
					two: ' 776',
					three: '-9882'
				}
			}

			function select (link) {
				vm.isActive = false;
				if(link == 'home')
					vm.current = null;
				else
					vm.current = link;
			}
		}
})();
