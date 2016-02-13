angular.module('myApp');
myApp.factory('orderFactory', function($http) {
  var factory = {};

  factory.showItems = function(callback) {
    callback(items);
  }

  factory.showOrders = function(callback) {
    $http.get('/showOrders').success(function(output) {
      orders = output;
      callback(orders);
    });
  }

  factory.addOrder = function(newOrder, callback) {
    newOrder.date = Date();
    $http.post('/addOrder', newOrder).success(function successCallback(response) {
      callback(response);
    }, function errorCallback(response) {
      callback(response);
    });
  }

  factory.deleteOrder = function(order) {
    orders.splice(order, 1);
  }

  return factory;
});