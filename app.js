var express = require('express');
var app = express();
var mongoose = require('mongoose');
//var CurrentProduct = require('./ProductModel');
var bodyParser = require('body-parser');
var api = require('./api/api');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api', api);

var strConnect = "mongodb+srv://Yoav:yoavkami2003@cluster0.bkz3w.mongodb.net/product?retryWrites=true&w=majority";
const OPT = {useNewUrlParser:true};
mongoose.connect(strConnect, OPT);
var port = process.envPort || 3141;
app.listen(port, function(){
    console.log("Runnig on port " + port);
});