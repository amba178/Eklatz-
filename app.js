var  express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
// var bootstrap = require('bootstrap');
var app = express();


 var data = [];


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

 app.use(function(req, res, next) { 
 	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
 	next();
 });

 app.use(express.static("./public"));
 app.use(cors());


 app.listen(3000);

 console.log("D3 chat UI running on port 3000");


