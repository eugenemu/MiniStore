angular.module('myApp');
myApp.controller('ordersController', function ($scope, orderFactory, customerFactory, productFactory) {

  customerFactory.showCustomers(function(data) {
    $scope.customers = data;
  })

  productFactory.showProducts(function(data) {
    $scope.products = data;
  })

  orderFactory.showOrders(function(data) {
    $scope.orders = data;
  })

  $scope.quantity = false;

  $scope.addOrder = function() {
    if ($scope.newOrder && $scope.newOrder.customer && $scope.newOrder.product && $scope.newOrder.quantity) {
      $scope.error = false;
      productFactory.getProduct($scope.newOrder, function(data) {
        $scope.product = data;
        if (($scope.product.quantity - $scope.newOrder.quantity) >= 0) {
          productFactory.updateQuantity($scope.newOrder);
          orderFactory.addOrder($scope.newOrder, function(data) {
            $scope.orders = data;
            $scope.newOrder = {};
          });
        } else {
          $scope.quantity = true;
        }
      });
    } else {
      $scope.error = true;
    }  
  }

  $scope.deleteOrder = function(team) {
    orderFactory.deleteTeam($scope.orders.indexOf(team));
  }

});