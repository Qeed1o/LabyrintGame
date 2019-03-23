function Boss(mE){
	this.init = () => {
		mE.style.visibility = "visible";
	}

	this.die = () => {
		mE.style.visibility = "hidden";
	}
}