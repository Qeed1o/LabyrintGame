function Hero(){
	this.HP = 100;
	this.Armor = 10;
	this.Key = false;

	this.addStat = (stat, value) => {
		eval("this." + stat + " += " + value);
	}

	this.getStat = (stat) => {
		return eval("this."+stat)
	}

	this.setStat = (stat, value) => {
		eval("this." + stat + " = " + value);
	}
}