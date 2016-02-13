angular.module('myApp');
myApp.factory('customerFactory', function($http) {
  var factory = {};

  factory.showCustomers = function(callback) {
    $http.get('/showCustomers').success(function(output) {
      customers = output;
      callback(customers);
    });
  }

  factory.addCustomer = function(newCustomer, callback) {
    newCustomer.date = Date();
    $http.post('/addCustomer', newCustomer).success(function successCallback(response) {
      callback(response);
    }, function errorCallback(response) {
      callback(response);
    });
  }

  factory.deleteCustomer = function(customer, callback) {
    $http.post('/deleteCustomer', customer).success(function successCallback(response) {
      callback(response);
    }, function errorCallback(response) {
      callback(response);
    });
  }

  return factory;
});