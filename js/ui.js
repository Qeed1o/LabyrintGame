function UI(parentEL){
	var
		main_EL = parentEL;

	this.init = function(){
		this.addImages();
		this.addStats();
		this.updateStats();
	}

	this.addImages = function(){
		let // Картинки всего, что будет на "плашке"
			face, heart, sword, shield;

		face = document.createElement('img');
		face.src = "https://pngimage.net/wp-content/uploads/2018/05/anime-head-png-2.png";

		main_EL.appendChild(face);
		/*main_EL.appendChild(heart);
		main_EL.appendChild(shield);
		main_EL.appendChild(sword);*/
	}

	this.addStats = function(){

	}

	this.updateStats = function(){

	}
}