function Level(mE){
	var
		size_W = 15, size_H = 10, main_EL = mE;

	this.InitLevel = function(){ // Создаём уровень
		let
			max_mobs = 10, nl_f = false;
		main_EL = document.getElementById("game_GRID");
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
				}
				else if(wall){ // "Фиолетовый" блок
					className = "game_wall";
				}
				else if(nl && !nl_f){ // Следующий уровень
					className = "game_nextLevel";
					nl_f = true;
				}
				else{ // Обычный "блок"
					className = "game_default";
				}

				if (i == 0 && j == 0){ // Первый блок всегда открыт, и ничем не занят
					className = "game_default";
					max_mobs = 10; nl_f = false;
				}

				className == "game_nextLevel" 	?	div.onclick = () => this.click_Block(div, "nl")	: {}
				className == "game_mob" 		?	div.onclick = () => this.click_Block(div, "m")	: {} 
				className == "game_wall" 		?	div.onclick = () => this.click_Block(div, "w")	: {} 
				className == "game_default" 	?	div.onclick = () => this.click_Block(div, "d")	: {} 
				div.classList.add(className);
				(i == 0 && j == 0) ||
				(className == "game_nextLevel") ? {} : div.classList.add("fogged");
				main_EL.appendChild(div);
			}
		}

		if(!nl_f){ // Если не было выхода с уровня - ставим его на последний блок
			main_EL.removeChild(main_EL.lastChild);

			let 
				div = document.createElement('div');
				div.setAttribute("Col",size_W - 1);
				div.setAttribute("Row",size_H - 1);
				div.classList.add("game_nextLevel");
				div.onclick = () => this.click_Block(div, "nl");

			main_EL.appendChild(div);
		}
	}

	this.unfog_All = function(){ // Открыть весь уровень
		for(i = 0; i < main_EL.childNodes.length; i++){
			main_EL.childNodes[i].classList.contains("fogged") ? main_EL.childNodes[i].classList.remove("fogged") : {};
		}
	}

 	this.click_Block = function(el, type){ // Клик на обычный блок
		if(this.near_Fogged(el.getAttribute("Col"),el.getAttribute("Row"))){
			let row = parseInt(el.getAttribute("Row")), col = parseInt(el.getAttribute("Col")),
				item = (row * 15) + col;
			main_EL.childNodes[item].classList.remove("fogged");
		}

		if (type == "nl"){ // След. уровень

		}else if (type == "m"){ // Монстр

		}else if (type == "w"){ // Стена

		}
	}

	this.near_Fogged = function(col, row){ // Проверяем соседние клетки на "затуманенность"
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
}