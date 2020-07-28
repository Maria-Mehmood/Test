(function () {
	var names = ["Charles","James","John","Alex","Susan","Sim","jason","jack"];
	for (var i = 0; i < names.length; i++) {
		var letter = names[i].charAt(0);
		if (letter == 'J' || letter == 'j'){
			GoodBye.print(names[i]);
		}
		else{
			Hello.print(names[i]);
		}
	}
})();