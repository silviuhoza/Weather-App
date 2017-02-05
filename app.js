var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function (req, res) {
	var city = req.query.search  ;
	var url = "https://api.apixu.com/v1/forecast.json?key=e1a21c4fdd4d4075bd495540170901&q=" + city +"&days=3";
	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			
		 var nimu = JSON.parse(body);
		 //console.log(nimu );
	     res.render("results", {data: nimu});
	    
		} 
	});
	
});

app.listen(3000, function () {
	console.log("Weather server has started!");
});