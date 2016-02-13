//  inject the ngRoute dependency in the module.
var myApp = angular.module('myApp', ['ngRoute']);
//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html'
    })
    .when('/products', {
      templateUrl: 'partials/products.html'
    })
    .when('/orders',{
      templateUrl: 'partials/orders.html'
    })
    .when('/customers',{
      templateUrl: 'partials/customers.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});