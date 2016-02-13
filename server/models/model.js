var mongoose = require('mongoose');

//schemas go here
var CustomerSchema = new mongoose.Schema({
	name: String,
	date: Date
})
//create model
mongoose.model('Customer', CustomerSchema);

var ProductSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	quantity: Number,
})
mongoose.model('Product', ProductSchema);

var OrderSchema = new mongoose.Schema({
	customer: String,
	product: String,
	quantity: Number,
	date: Date
})
mongoose.model('Order', OrderSchema);