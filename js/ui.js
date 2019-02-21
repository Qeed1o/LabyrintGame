function UI(parentEL){
	var
		main_EL = parentEL,
		face, heart, sword, shield;

	this.init = function(){
		this.addImages();
		this.addStats();
		this.updateStats();
	}

	this.addImages = function(){
		face = document.createElement('img');
		face.src = "https://pngimage.net/wp-content/uploads/2018/05/anime-head-png-2.png";
		//face.onclick = () => { hero.HP -= 1; this.updateStats(); }

		heart = document.createElement("text");
		heart.innerHTML = hero.HP;

		main_EL.appendChild(face);
		main_EL.appendChild(heart);
		/*main_EL.appendChild(shield);
		main_EL.appendChild(sword);*/
	}

	this.addStats = function(){

	}

	this.updateStats = function(){
		heart.innerHTML = hero.HP;
	}
}