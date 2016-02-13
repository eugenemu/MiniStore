var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/static')));

app.listen(8000, function() {
    console.log("listening on port 8000");
})