var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

	show: function(req, res) {
		Product.find({}, function(err, products) {
			res.json(products);
		})
	},

	find: function(req, res) {
		Product.findOne({name: req.body.product}, function(err, product) {
			res.json(product);
		})
	},

	add: function(req, res) {
		var product = new Product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity});
		product.save(function(err) {
			res.redirect('/showProducts');
		}) 
	},

	update: function(req, res) {
		console.log(req.body.quantity);
		Product.update({name: req.body.product}, {$inc: {quantity: -req.body.quantity}}, function(err, products) {
			res.redirect('/showProducts');
		})
	}

}