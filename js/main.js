var
	lvl, ui;

document.addEventListener("DOMContentLoaded", function(event) {
    lvl = new Level(document.getElementById("game_GRID"));
	ui 	= new UI(document.getElementById("game_UI"));

	lvl.InitLevel();
	ui.init();
});
	