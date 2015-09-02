angular.module('saleskitApp')

	.directive('revolutionslider', function(){
		return {
			retrict: 'E', 
			templateUrl: 'directives/revolution-slider.html', 
			controller: 'dialMenuCtrl'
		}
	})