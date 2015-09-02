angular.module('saleskitApp')


.factory('SaleskitDataService',function ($http , $q) {

	var self = {};
	self.get = function() {
		var deferred = $q.defer();
        $http.get('/data/saleskit-data.json').success(function (data) {
        	self.data = data;
			deferred.resolve(data);
        });
    
        return deferred.promise; 
	}

	return self;
});
