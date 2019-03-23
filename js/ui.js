function UI(parentEL){
	var
		main_EL = parentEL,
		face, heart, sword, shield;

	this.init = () => {
		main_EL.style.visibility = "visible";
		this.addImages();
		this.updateStatsText();
	}

	this.addImages = () => {
		//this.face = document.createElement('img');
		//this.face.src = "https://pngimage.net/wp-content/uploads/2018/05/anime-head-png-2.png";
		//this.face.onclick = () => { hero.HP -= 1; this.updateStatsText(); }

		this.heart = document.createElement("text");
		this.heart.innerHTML = "HP: " + hero.getStat("HP");

		this.shield = document.createElement("text");
		this.shield.innerHTML = "Armor: " + hero.getStat("Armor");

		//main_EL.appendChild(this.face);
		main_EL.appendChild(this.heart);
		main_EL.appendChild(document.createElement("br"));
		main_EL.appendChild(this.shield);
		/*this.main_EL.appendChild(this.sword);*/
	}

	this.updateStatsText = () => {
		this.heart.innerHTML = "HP: " + hero.getStat("HP");
		this.shield.innerHTML = "Armor: " + hero.getStat("Armor");
	}

	this.die = () => {
		main_EL.innerHTML = "";
		main_EL.style.visibility = "hidden";
	}
}