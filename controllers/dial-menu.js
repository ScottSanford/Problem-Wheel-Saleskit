angular.module('saleskitApp')

	.controller('dialMenuCtrl', ['$scope','$location', '$routeParams', 'mfly', function($scope, $location, $routeParams, mfly){

		$scope.viewClass = 'dialmenu';

		$scope.goToSellType = function(id) {
			$location.url('/secondpage/' + id);
		}

		var piemenu = new wheelnav('piemenu');
		piemenu.spreaderInTitle = icon.plus;
		piemenu.spreaderOutTitle = icon.cross;
		piemenu.sliceInitPathFunction = piemenu.slicePathFunction;
		piemenu.initPercent = 0.1;
		piemenu.wheelRadius = piemenu.wheelRadius * 0.83;
		piemenu.createWheel();

		$scope.previousItem = function() {
			mfly.previousItem();
		}

		$scope.nextItem = function() {
			mfly.nextItem();
		}

	  // jquery 
	  $(document).ready(function(){
          $('.tp-banner').revolution({
          	  delay:100000000000000,
              startwidth:960,
              startheight:500,
              hideThumbs:10, 
              navigationType:"none", 
              forceFullWidth: "on", 
              hideTimerBar:"on", 
              navigationArrows: "none", 
              touchenabled: "off"
          });

          piemenu.navItems[0].navigateFunction = function(){
			$('.tp-banner').revshowslide(1);
		  }
          piemenu.navItems[1].navigateFunction = function(){
			$('.tp-banner').revshowslide(2);
		  }
          piemenu.navItems[2].navigateFunction = function(){
			$('.tp-banner').revshowslide(3);
		  }
          piemenu.navItems[3].navigateFunction = function(){
			$('.tp-banner').revshowslide(4);
		  }
          piemenu.navItems[4].navigateFunction = function(){
			$('.tp-banner').revshowslide(5);
		  }

      

      });

	}]);