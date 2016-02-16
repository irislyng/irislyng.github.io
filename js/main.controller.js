(function() {

	'use strict';

	angular
		.module('app')
		.controller('MainController', MainController);


		function MainController($rootScope, dataService, $location, $timeout, $state) {
			var vm = this;
			vm.animate = animate;
			vm.nav = ['home', 'about', 'resume', 'projects', 'contact'];

			activate();

			///////////////////

			function activate() {
				dataService.getData('main')
					.then(function(data) {
						vm.links = data.links;
						vm.contact = data.contacts;
					})

				$rootScope.$on('$stateChangeSuccess', function() {
					vm.state = $state.$current.name;
				})
			}

			function animate() {

				$timeout(function() {
					/* HEADER FADE IN */
					var header = document.getElementById('header-info');
					if (header.classList.contains('hide')) {
						header.classList.remove('hide');
					}

					header.style.opacity = 0;

					var fadeIn = function() {
						header.style.opacity = +header.style.opacity + 0.01;

						if (+header.style.opacity < 0.9) {
							(window.requestAnimationFrame && requestAnimationFrame(fadeIn)) || setTimeout(fadeIn, 16)
						}
					};

					fadeIn();
				}, 500);
				
			}

		}
})();
