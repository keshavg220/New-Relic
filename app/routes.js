
module.exports = function(app, User) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.render('/index.html');
	});
	app.post("/addname",(req, res) => {
		var user = new User(); // TypeError: User is not a constructor
		user.email = req.body.email;
		user.password = req.body.password;
		console.log("hello");
		console.log(user.email);
		user.save(function(err) {
			console.log(err);
			console.log("andar");
			if (err) return next(err);
			console.log("saved sucessfully")
			res.json('Successfully register a new user');
			return "success";
		});
		return "success";
	   });
	   app.post("/generateError",(req, res) => {
		var user = new Erorrs(); 
		return "success";
	   });
};