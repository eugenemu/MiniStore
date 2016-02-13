angular.module('myApp');
myApp.controller('customersController', function ($scope, customerFactory) {
  customerFactory.showCustomers(function(data) {
    $scope.customers = data;
  });

  $scope.addCustomer = function() {

    $scope.error = false;
    for (var i = 0; i < customers.length; i++) {
      if ($scope.newCustomer.name == customers[i].name) {
        $scope.error = true;
        break;
      }
    }

    if ($scope.error == false) {
      customerFactory.addCustomer($scope.newCustomer, function(data) {
        $scope.customers = data;
        $scope.newCustomer = {};
      });
    }

  }

  $scope.deleteCustomer = function(customer) {
    customerFactory.deleteCustomer(customer, function(data) {
      $scope.customers = data;
    });
  }

});