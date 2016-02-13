var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {

	show: function(req, res) {
		Customer.find({}, function(err, customers) {
			res.json(customers);
		})
	},

	add: function(req, res) {
		var customer = new Customer({name: req.body.name, date: req.body.date});
		customer.save(function(err) {
			res.redirect('/showCustomers');
		})
	},

	delete: function(req, res) {
		Customer.remove({_id: req.body._id}, function(err, doc) {
			if (err) {
				console.log("Was not deleted");
			} else {
				res.redirect('/showCustomers');
			}
		})
	}

}