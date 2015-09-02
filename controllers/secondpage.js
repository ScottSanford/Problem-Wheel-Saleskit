angular.module('saleskitApp')

	.controller('secondpageCtrl', ['$scope', '$location', '$routeParams', 'saleskit', 'mfly', function($scope, $location, $routeParams, saleskit, mfly){

          $scope.viewClass= 'secondpage';

          $scope.backtoIndex = function() {
              $location.url('/');
          }


          for (var i = 0; i < saleskit.length; i++) {
            if ($routeParams.id === saleskit[i].id) {
              console.log(saleskit[i]);
              $scope.photo      = saleskit[i].photo;
              $scope.title      = saleskit[i].title;
              $scope.definition = saleskit[i].definition;
              $scope.drivers    = saleskit[i].drivers;
              $scope.approaches = saleskit[i].approaches;
              $scope.outcomes   = saleskit[i].outcomes;
            }
          }

           $scope.tab = 1;

           $scope.setTab = function(tabId) {
           		$scope.tab = tabId;
           }

           $scope.isSet = function(tabId) {
           		return $scope.tab === tabId;
           }

          $scope.previousItem = function() {
            mfly.previousItem();
          }

          $scope.nextItem = function() {
            mfly.nextItem();
          }

	}]);