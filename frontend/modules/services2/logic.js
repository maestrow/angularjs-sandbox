(function () {
	angular.module('app', ['ngResource'])
		.factory('User', ['$resource', function($resource){
			return $resource('/resource/services2/list.json', {}, {
				query: {
					method: 'POST',
					isArray: true,
					data: { a:1, b:2 }
				}
			});
		}])
		.controller('MyCtrl', ['$scope', 'User', function($scope, User){
			$scope.items = User.query();
		}]);
})();