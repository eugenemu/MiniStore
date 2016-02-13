var customer = require('../controllers/customersController.js');
var order = require('../controllers/ordersController.js');
var product = require('../controllers/productsController.js');

module.exports = function(app) {
	//customer controller routes
	app.get('/showCustomers', function(req, res) {
		customer.show(req, res);
	})

	app.post('/addCustomer', function(req, res) {
		customer.add(req, res);
	})

	app.post('/deleteCustomer', function(req, res) {
		customer.delete(req, res);
	})

	//product controller routes
	app.get('/showProducts', function(req, res) {
		product.show(req, res);
	})

	app.post('/addProduct', function(req, res) {
		product.add(req, res);
	})

	app.post('/updateQuantity', function(req, res) {
		product.update(req, res);
	})

	app.post('/getProduct', function(req, res) {
		product.find(req, res);
	})

	//order controller routes
	app.get('/showOrders', function(req, res) {
		order.show(req, res);
	})

	app.post('/addOrder', function(req, res) {
		order.add(req, res);
	})

}