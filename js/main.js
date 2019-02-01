var
	size_W = 15, size_H = 10, main_EL, counter = 0,
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
	main_EL.innerHTML = "";

	for(let i = 0; i < size_H; i++){
		for(let j = 0; j < size_W; j++){
			let
				div = document.createElement('div'),
				className;
			div.setAttribute("Col",j);
			div.setAttribute("Row",i);

			if(level[counter] == "M"){ // Монстр
				className = "game_mob";
			}
			else if(level[counter] == "W"){ // Стена
				className = "game_wall";
			}
			else if(level[counter] == "N"){ // Следующий уровень
				className = "game_nextLevel";
			}
			else{ // Обычный "блок"
				className = "game_default";
				div.onclick = () => click_Default(div);
			}
			//console.log(level[i]);

			div.className = className;
			(i == 0 && j == 0) ||
			(i == 1 && j == 0) ||
			(i == 0 && j == 1) ? {} : div.classList.add("fogged");
			main_EL.appendChild(div);
			counter += 1;
		}
	}
}

function click_Default(el){ // Клик на обычный блок
	if(el.classList.contains("fogged")){ // Не видим элемент
		{}
	}else{
		clear_Fog(el.getAttribute("Col"),el.getAttribute("Row"));	
	}
}

function clear_Fog(col,row){
	for(let i = 0; i < main_EL.childNodes.length; i++){
		if(main_EL.childNodes[i].getAttribute("Col") == col
							&&
			main_EL.childNodes[i].getAttribute("Row") == row){
				if(col == 0){
					let child = main_EL.childNodes;
					main_EL.childNodes[i+1].classList.remove("fogged");
				}else if(col == 14){
					let child = main_EL.childNodes;
					main_EL.childNodes[i-1].classList.remove("fogged");
				}else{
					let child = main_EL.childNodes;
					main_EL.childNodes[i+1].classList.remove("fogged");
					main_EL.childNodes[i-1].classList.remove("fogged");
				}

				if(row == 0){
					let child = main_EL.childNodes;
					main_EL.childNodes[i+15].classList.remove("fogged");
				}else if(row == 9){
					let child = main_EL.childNodes;
					main_EL.childNodes[i-15].classList.remove("fogged");
				}else{
					let child = main_EL.childNodes;
					main_EL.childNodes[i-15].classList.remove("fogged");
					main_EL.childNodes[i+15].classList.remove("fogged");
				}
		}
	}
}