(function(window){
	var GoodBye = {};
	var Greet = "Good Bye";
	GoodBye.print = function (name){
		console.log(Greet + " " + name);
	}
	window.GoodBye = GoodBye;
})(window);