var
	lvl, ui, hero;

document.addEventListener("DOMContentLoaded", function(event) {
    lvl = new Level(document.getElementById("game_GRID"));
	ui 	= new UI(document.getElementById("game_UI"));
	hero = new Hero();

	lvl.InitLevel();
	ui.init();
});
	