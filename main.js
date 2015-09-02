angular.module("saleskitApp", [
        'ngRoute', 
        'ngAnimate', 
        'ngMockE2E'
        ])

        .config(function ($routeProvider, $compileProvider) { 
              $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:\/\/data\/entry|http:\/\/)/);  
              $routeProvider
                .when('/', {
                    templateUrl: 'partials/dial-menu.html', 
                    controller: 'dialMenuCtrl'
                })
                .when('/secondpage/:id', {
                    templateUrl: 'partials/secondpage.html',
                    controller: 'secondpageCtrl', 
                    resolve: {
                                saleskit: function(SaleskitDataService){
                                    return SaleskitDataService.get();
                                }   
                             }
                })
                .otherwise({
                    redirectTo: '/'
                });
          })
        