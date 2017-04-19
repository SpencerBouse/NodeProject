(function() {
    'use strict';

    angular
        .module('node')
        .factory('API', function($http) {

        const vm = this;


            return {
                getData:() => {
                  return $http({
                    method:'GET',
                    url:'http://localhost:8080/people'
                  })
                                },
                createPeople:(data) => {
                    return $http({
                      method:'POST',
                      data: data,
                      url:'http://localhost:8080/people'
                    })
                }
            };
        })

})();
