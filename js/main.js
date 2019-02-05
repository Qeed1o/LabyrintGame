var
	size_W = 15, size_H = 10, main_EL;


function InitLevel(){ // Создаём уровень
	let
		max_mobs = 10, nl_f = false;
	main_EL = document.getElementById("game_MainWrapper");
	main_EL.innerHTML = ""; // Элемент, в котором будет игра

	for(let i = 0; i < size_H; i++){ // Проходим по каждой клетке
		for(let j = 0; j < size_W; j++){
			let
				rnd = Math.floor(Math.random() * 100), 	// Шансы каждого блока
				mob 	= (rnd < 10),					// Монстр	
				wall 	= (rnd >= 10) && (rnd < 15), 	// Фиолетовый блок
				nl 		= (rnd >= 15) && (rnd < 17), 	// Переход на след. уровень

				div = document.createElement('div'), className;
			div.setAttribute("Col",j);
			div.setAttribute("Row",i);

			if(mob && max_mobs > 0){ // Монстр
				className = "game_mob";
				max_mobs -= 1;
				div.classList.add("mob")
			}
			else if(wall){ // "Фиолетовый" блок
				className = "game_wall";
				div.classList.add("wall")
			}
			else if(nl && !nl_f){ // Следующий уровень
				className = "game_nextLevel";
				nl_f = true;
				div.classList.add("nextlevel")
			}
			else{ // Обычный "блок"
				className = "game_default";
			}

			if (i == 0 && j == 0){ // Первый блок всегда открыт, и ничем не занят
				className = "game_default";
				max_mobs = 10; nl_f = false;
			}

			if (i == size_W - 1 && j == size_H - 1 && !nl_f){ // 100% переход на след. уровень
				className = "game_nextLevel";
				nl_f = true;
				div.classList.add("nextlevel")
			}

			div.onclick = () => click_Default(div);
			div.classList.add(className);
			(i == 0 && j == 0) ||
			(className == "game_nextLevel") ? {} : div.classList.add("fogged");
			main_EL.appendChild(div);
		}
	}
}

function unfog_All(){ // Открыть весь уровень
	for(i = 0; i < main_EL.childNodes.length; i++){
		main_EL.childNodes[i].classList.contains("fogged") ? main_EL.childNodes[i].classList.remove("fogged") : {};
	}
}

function click_Default(el){ // Клик на обычный блок
	if(near_Fogged(el.getAttribute("Col"),el.getAttribute("Row"))){
		let row = parseInt(el.getAttribute("Row")), col = parseInt(el.getAttribute("Col")),
			item = (row * 15) + col;
		main_EL.childNodes[item].classList.remove("fogged");
	}
}

function near_Fogged(col, row){ // Проверяем соседние клетки на "затуманенность"
	for(let i = 0; i < main_EL.childNodes.length; i++){
		if(main_EL.childNodes[i].getAttribute("Col") == col
							&&
			main_EL.childNodes[i].getAttribute("Row") == row){
				let tmp = [	i - 16,	 i - 15, i - 14,
							i-1,	 i,		 i+1,
							i+14,	 i+15, i+16];
				for(let k = 0; k < 8; k++){
					let child = main_EL.childNodes[tmp[k]];	
					if(child){
						//console.log("tmp[k] - "+child.classList.contains("fogged")+"; k - "+(k+1));
						if(!child.classList.contains("fogged")){
							return true;
						}
					}
				}
		}
	}
}