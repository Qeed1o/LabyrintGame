var
	size_W = 15, size_H = 10, main_EL,
	level = ["D","D","D","D","D","D","D","D","D","D","D","D","D","D","M",
			"D","D","D","D","D","D","D","D","D","D","D","D","D","D","D",
			"D","D","D","D","D","D","D","D","D","D","D","D","D","D","D",
			"D","D","D","D","D","D","D","D","D","D","D","D","D","D","D",
			"D","W","W","W","W","W","W","W","W","W","W","W","W","W","D",
			"D","D","D","D","D","D","D","M","D","D","D","D","D","D","D",
			"W","W","W","W","W","W","W","W","W","W","W","W","W","W","D",
			"D","D","D","D","D","D","D","D","D","D","D","D","D","D","D",
			"D","W","W","W","W","W","W","W","W","W","W","W","W","W","W",
			"D","D","D","D","D","D","D","D","D","D","D","D","D","D","N"];


function InitLevel(){
	main_EL = document.getElementById("game_MainWrapper");
	for(let i=0; i<size_W * size_H; i++){
		let
			div = document.createElement('div'),
			className;

		level[i] == "D" ? className = "game_default" : {};
		level[i] == "W" ? className = "game_wall" : {};
		level[i] == "N" ? className = "game_nextLevel" : {};
		level[i] == "M" ? className = "game_mob" : {};
		//console.log(level[i]);

		div.className = className;
		main_EL.appendChild(div);
	}
}