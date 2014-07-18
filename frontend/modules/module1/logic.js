var mod = angular.module('module1', ['ngResource']);

mod.factory('Product', ['$resource', function ($resource) {

	return $resource('/api/products/:prodId', {}, {
		update: {
			url: '/api/products/update/:id',
			method: 'PUT',
			params: { id: '@id' }
		}
	});
}]);

mod.controller('ProductList', [
	'$scope', 'Product', function ($scope, Product) {
		$scope.products = Product.query({ prodId: 1 });

		$scope.action = function(actionName, params) {
			new Product()['$' + actionName](urlParams, bodyParams);
		};
	}
]);
