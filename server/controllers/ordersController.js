var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {

	show: function(req, res) {
		Order.find({}, function(err, orders) {
			res.json(orders);
		});
	},

	add: function(req, res) {
		var order = new Order({customer: req.body.customer, product: req.body.product, quantity: req.body.quantity, date: req.body.date});
		order.save(function(err) {
			res.redirect('/showOrders');
		})
	}

}