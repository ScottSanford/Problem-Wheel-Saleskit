angular.module('saleskitApp').factory("saleskitData", function($http, $q, CSVConverterService) {
       return {
            get: function() {
                var deferred = $q.defer();

                var url = 'data/problemwheel-saleskit.csv';

                $http.get(url)
                 .success(function (data) {
                     deferred.resolve(CSVConverterService.csvToJSON(data));
                });
                return deferred.promise;           
            }
        }

});