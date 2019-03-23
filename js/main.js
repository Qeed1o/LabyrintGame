var
	hero, block_Way = false;

document.addEventListener("DOMContentLoaded", function(event) {
	game = new Game(document.getElementById("game_MainWrapper"));
	hero = new Hero();

	game.init();
});
	