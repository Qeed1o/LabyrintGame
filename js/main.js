var
	lvl, ui, hero,
	block_Way = false;

document.addEventListener("DOMContentLoaded", function(event) {
    lvl = new Level(document.getElementById("game_GRID"));
	ui 	= new UI(document.getElementById("game_UI"));
	hero = new Hero();

	lvl.InitLevel();
	ui.init();
	/*setInterval(() => {
		let nodes = document.getElementById("game_GRID").childNodes;
		let k = 0;
		for (let item in nodes){
			if (!nodes[item].classList){
				if(nodes[item].classList.contains("game_mob")){
					k += 1;
				}
			};
		}
		console.log(k)
	}, 500) // Main update function*/
});
	