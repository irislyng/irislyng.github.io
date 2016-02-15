(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    function dataService($http, $q) {
        var service = {
            getData: getData
        };

        return service;

        ////////////////


        function getData(query) {
            return $http.get('/src/'+query+'.json')
            .then(success);

            function success(response) {
                var data = response.data;
                return data;
            };
        }
    }
})();