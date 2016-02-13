angular.module('myApp');
myApp.controller('productsController', function ($scope, productFactory) {
	
	productFactory.showProducts(function(data) {
		$scope.products = data;
	});

	$scope.addProduct = function() {
		productFactory.addProduct($scope.newProduct, function(data) {
			$scope.products = data;
			$scope.newProduct = {};
		});
	}

})