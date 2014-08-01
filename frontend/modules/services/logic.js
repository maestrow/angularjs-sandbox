var mod = angular.module('app', ['ngResource']);

mod.factory('Product', ['$resource', function ($resource) {

	return $resource('/resource/module1/:prodId.json', {}, {
		update: {
			url: '/api/products/update/:id',
			method: 'PUT',
			params: { id: '@id' }
		}
	});
}]);

mod.controller('ProductList', ['$scope', 'Product', 
	function ($scope, Product) {
		$scope.products = Product.query({ prodId: 'list' });

		$scope.action = function(actionName, urlParams, bodyParams) {
			new Product()[actionName](urlParams, bodyParams);
		};

		$scope.change = function() {
			var prod = Product.get({prodId:1}, function() {
				prod.abc = true;
				prod.$save();
			});
		};
	}
]);
