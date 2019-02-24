function UI(parentEL){
	var
		main_EL = parentEL,
		face, heart, sword, shield;

	this.init = () => {
		this.addImages();
		this.addStats();
		this.updateStats();
	}

	this.addImages = () => {
		this.face = document.createElement('img');
		this.face.src = "https://pngimage.net/wp-content/uploads/2018/05/anime-head-png-2.png";
		//this.face.onclick = () => { hero.HP -= 1; this.updateStats(); }

		this.heart = document.createElement("text");
		this.heart.innerHTML = hero.HP;

		main_EL.appendChild(this.face);
		main_EL.appendChild(this.heart);
		/*this.main_EL.appendChild(this.shield);
		this.main_EL.appendChild(this.sword);*/
	}

	this.addStats = () => {

	}

	this.updateStats = () => {
		this.heart.innerHTML = hero.HP;
	}
}