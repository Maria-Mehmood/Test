(function(window){
	var Hello = {};
	var Greet = "Hello";
	Hello.print = function (name){
		console.log(Greet + " " + name);
	}
	window.Hello = Hello;
})(window);