(function() {
    'use strict';

    angular
        .module('node')
        .controller('TableController', function(API, $filter) {
        	const vm = this;

          let people = API.getData()
            people.then(response=>{
              vm.data = response.data
              })


          vm.submitForm = function(){
            if(!vm.person.likesJS){
              vm.person.likesJS = false
            }
            vm.person.id = new Date().valueOf();
            let newPerson = API.createPeople(vm.person)
              newPerson.then(response=>{
                vm.data = response.data
              })
              vm.person={}
          }
				  })
			})();
