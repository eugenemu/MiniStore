angular.module('myApp');
myApp.controller('dashboardController', function ($scope, customerFactory, productFactory, orderFactory) {

	customerFactory.showCustomers(function(data) {
		$scope.customers = data;
		for (var i =0; i < $scope.customers.length; i++) {
			$scope.customers[i].difference = moment($scope.customers[i].date).fromNow();
		}
	})

	productFactory.showProducts(function(data) {
    $scope.products = data;
  })

  orderFactory.showOrders(function(data) {
    $scope.orders = data;
    for (var i = 0; i < $scope.orders.length; i++) {
    	$scope.orders[i].difference = moment($scope.orders[i].date).fromNow();
    }
  })

});