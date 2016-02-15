(function () {
	
	angular
		.module('app')
		.config(Routing);

		function Routing($stateProvider, $urlRouterProvider, $locationProvider) {
			
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl:'/views/main.view.html',
					controller: 'MainController',
					controllerAs: 'vm'
				})
				.state('about', {
					url: '/about',
					templateUrl:'/views/about.view.html',
					controller: 'AboutController',
					controllerAs: 'vm'
				})
				.state('resume', {
					url: '/resume',
					templateUrl:'/views/resume.view.html',
					controller: 'ResumeController',
					controllerAs: 'vm'
				})
				.state('projects', {
					url: '/projects',
					templateUrl:'/views/projects.view.html',
					controller: 'ProjectsController',
					controllerAs: 'vm'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: '/views/contact.view.html',
					controller: 'MainController',
					controllerAs: 'vm'
				})

			$locationProvider.html5Mode(true);
		}
})();