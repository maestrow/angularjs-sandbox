var mod = angular.module('app');

mod.factory('MyObject', function () {
    console.log('factory running');
    return {
    	"some field": "some value"
    }
});