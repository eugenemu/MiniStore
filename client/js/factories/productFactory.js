angular.module('myApp');
myApp.factory('productFactory', function($http) {
	var factory = {};

	factory.showProducts = function(callback) {
		$http.get('/showProducts').success(function(output) {
			products = output;
			callback(products);
		});
	}

	factory.addProduct = function(newProduct, callback) {
		$http.post('/addProduct', newProduct).success(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			callback(response);
		});
	}

	factory.getProduct = function(product, callback) {
		$http.post('/getProduct', product).success(function successCallback(response) {
			callback(response);
		}, function errorCallback(response) {
			callback(response);
		});
	}

	factory.updateQuantity = function(product) {
		$http.post('/updateQuantity', product).success(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	}

	return factory;
})