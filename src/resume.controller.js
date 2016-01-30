(function() {
	'use strict';

	angular
		.module('app')
		.controller('ResumeController', ResumeController)

		function ResumeController() {
			var vm = this;
			vm.titles = {
				work: 'Work Experience',
				skills: 'Technical Skills',
				projects: 'Projects',
				education: 'Education',
				awards: 'Awards/Achievements'
			}

			/* WORK EXPERIENCE */
			vm.jobs = [
				{
					title: 'Front End Developer',
					location: 'Media Classified Corporation, Vaughan ON',
					date: 'May 2015 - Present',
					description: [
						'Web application development for front-end system using AngularJS, several JavaScript libraries, HTML5 and CSS3 using test-driven development',
						'Implement responsive modules to improve UI/UX over various electronic devices',
						'Developed in a collaborative environment using Agile programming to ensure customer and client satisfaction through creation of user stories',
						'Integration of existing CMS to application using RESTful APIs'
					]
				},
				{
					title: 'Teaching Assistant',
					location: 'McMaster University, Hamilton ON',
					date: 'Jan 2015 - Apr 2015',
					description: [
						'Supervised and marked weekly labs for Physics 1E03 - Waves, Electricity and Magnetic Fields',
						'Demonstrated use of lab equipment such as meters and connecting circuits to students and ensured they are used in a safe manner',
						'Guided students in performing the lab correctly and helped clear up any misunderstandings students had about concepts taught in class'
					]
				},
				{
					title: 'Private Tutor',
					location: 'McMaster Engineering Society, Hamilton ON',
					date: 'Oct 2013 - Apr 2015',
					description: [
						'Provided 1-on-1 private tutoring sessions for students in the Faculty of Engineering',
						'Assisted students in improving their academic achievements by clarifying learning problems',
						'Advised students on improving time management skills and study habits'
					]
				},
				{
					title: 'Retail Customer Representative',
					location: 'African Lion Safari, Hamilton ON',
					date: 'Apr 2014 - Oct 2014',
					description: [
						'Ensured all customers\' needs were met and handled several customer inquiries',
						'Maintained a safe and clean environment at numerous gift shop locations',
						'Trained in cashier services, using POS software, and visa/debit machines'
					]
				}
				// {
				// 	title: 'Sales Associate',
				// 	location: 'Forever 21, Lime Ridge Mall, Hamilton ON',
				// 	date: 'Jul 2013 - Mar 2014',
				// 	description: [
				// 		'Assisted customers in locating products within the store and handled several transactions',
				// 		'Gained experience interacting with customers and working under pressure',
				// 		'Developed teamwork skills and cooperated with colleagues to create a safe workplace environment'
				// 	]
				// }

			];

			/* Skills */

			vm.skills = {
				tools: "Languages/Frameworks",
				tools_desc: "Java, AngularJS, HTML5, CSS3, JavaScript, jQuery, MATLAB, Python, C",
				others:  "Tools",
				others_desc: "Git, Sass, JUnit, Eclipse, Unix, Windows, Android"
			};

			vm.education = {
				title: "Bachelor of Software Engineering and Management",
				location: "McMaster University, Hamilton, ON",
				date: "Class of 2017",
				description: [
				"Currently completing level four of a five-year Software Engineering and Management program which combines the technical and business aspects of Engineering", 
				"Received the Motorola Software Engineering Scholarship and Enbridge Higher Education Award", 
				"Relevant Courses: Software Design, Data Structures and Algorithms, Computer Architecture, Software Requirements and Security Considerations, Scientific Computation, Large System Design"
				]
			};

			vm.awards = [
				{
					title: "Motorola Software Engineering Scholarship",
					location: "Motorola Foundation",
					date: "September 2014",
					description: [
					"Awarded to two students entering Level III in a Software Engineering program who, in the judgment of the Department of Computing and Software, have achieved notable academic standing, displayed strong communication skills, demonstrated leadership and involvement in extra-curricular activities"
					]
				},
				{
					title: "Duke of Edinburgh Award - Gold Level",
					location: "Vision Youth Leadership Program",
					date: "April 2012",
					description: [
					"Received the DEA Gold Level Award from The Right Honourable David Johnston",
					"Gained leadership and teamwork skills through group-oriented activities and developmental programs such as Toastmasters"
					]
				}
			];

			vm.achievements = [
				{
					club: 'Software Engineering Club',
					position: 'Vice President - Social',
					year: '2015-2016'
				},
				{
					club: 'McMaster Engineering Society',
					position: 'Computer and Software Representative',
					year: '2014-2015'
				},
				{
					club: 'Asian F.O.C.U.S (Federation of Charitable University Students)',
					position: '1st Year Representative',
					year: '2012-2013'
				}
			];
		}
})();