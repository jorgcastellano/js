function pokemon(n, v, a, g) {

	this.foto = "imgs/" + n + ".png";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = g;

	this.gritar = function() {
		alert(this.grito);
	}
}

function mostrarPoke(pokemon) {
	resultadoPoke.innerHTML = "<br><br><b>Nombre: </b>" + pokemon.nombre + "<br><b>Vida: </b>" + pokemon.vida + "<br><b>Ataque: </b>" + pokemon.ataque + "<br><b>Foto </b><br><img src='" + pokemon.foto + "' width='200px'>";
	pokemon.gritar();
}

function juegoPoke(e) {

	if (e == 1) {
		var pikachu = new pokemon("Pikachu", 100, 55, "Pika!");
		mostrarPoke(pikachu);
	} else if (e == 2) {
		var chikorita = new pokemon("Chikorita", 75, 37, "Chika!");
		mostrarPoke(chikorita);
	} else {
		var charmander = new pokemon("Charmander", 130, 45, "Char!");
		mostrarPoke(charmander);
	}
}