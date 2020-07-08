require('newrelic');
// require("appdynamics").profile({
//     controllerHostName: 'grace202006020834245.saas.appdynamics.com',
//     controllerPort: 443,
    
//     // If SSL, be sure to enable the next line
//     controllerSslEnabled: true,
//     accountName: 'grace202006020834245',
//     accountAccessKey: '2vi2zwjgkwzt',
//     applicationName: 'TheBlackJab',
//     tierName: 'test',
//     nodeName: 'process' // The controller will automatically append the node name with a unique number
//    });

// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
//castro202005111101452.saas.appdynamics.com
//ash!123

// configuration ===========================================
	
// config files

var db = require('./config/db');
const connectOptions = { 
    useMongoClient: true,
    autoReconnect: true
  };

var port = process.env.PORT || 6078; // set our port

mongoose.connect(db.url, connectOptions);
mongoose.connection.on("error", () => {
    console.log("> error occurred from the database");
});
mongoose.connection.once("open", _ => {
    console.log("> successfully opened the database");
});

var schema = mongoose.Schema;

var UserSchema = new schema({
    email: String,
    password: String
});
module.exports = mongoose;
var User = mongoose.model("User", UserSchema);

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public/V1')); // set the static files location /public/img will be /img for users

 require('./app/routes')(app, User); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app




