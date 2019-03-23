function Game(mE){
	let 
		lvl = new Level(document.getElementById("game_GRID")),
		ui 	= new UI(document.getElementById("game_UI")),
		boss = new Boss(document.getElementById("game_BOSS"));
		
	this.init = () => {
		mE.style.visibility = "visible";
		lvl.init();
		ui.init();
	}

	this.die = () => {
		lvl.die();
		ui.die();
		mE.style.visibility = "hidden";
	}
}