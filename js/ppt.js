function ppt(){

	var cpu = 0;
	var jugador = 0;

	var leyenda = "¿Piedra (1)?\n¿papel (2)?\n¿Tijera (3)?";
	var mensaje = leyenda;
	var numero;

	while((cpu < 3) && (jugador < 3)){

		numero = Math.round(Math.random() * (3.4 - 0.5) + 0.5);
		console.log(numero);

		var usuario = parseInt(prompt(mensaje));

		if (numero == 1 && usuario == 1) {
			mensaje  = "Empate con piedra cada uno\n"+leyenda;
		}
		else if (numero == 1 && usuario == 2) {
			mensaje = "Gana usuario con papel contra piedra\n"+leyenda;
			jugador++;
		}
		else if (numero == 1 && usuario == 3) {
			mensaje = "Gana computadora con piedra contra tijera\n"+leyenda;
			cpu++;
		}
		else if (numero == 2 && usuario == 1) {
			mensaje = "Gana computadora con papel contra piedra\n"+leyenda;
			cpu++;
		}
		else if (numero == 2 && usuario == 2) {
			mensaje = "Empate con papel cada uno\n"+leyenda;
		}
		else if (numero == 2 && usuario == 3) {
			mensaje = "Gana usuario con tijera contra papel\n"+leyenda;
			jugador++;
		}
		else if (numero == 3 && usuario == 1) {
			mensaje = "Gana usuario con piedra contra tijera\n"+leyenda;
			jugador++;
		}
		else if (numero == 3 && usuario == 2) {
			mensaje = "Gana computadora con tijera contra papel\n"+leyenda;
			cpu++;
		}
		else if (numero == 3 && usuario == 3) {
			mensaje = "Empate con tijera cada uno\n"+leyenda;
		}
		else if (usuario == 0){
			break;
		}
		else {
			mensaje = "Dato inválido, intentelo de nuevo\n"+leyenda;
		}
	}
	if (cpu === 3) {
		alert("La computadora ha ganado\nUsuario " + jugador + " - " + cpu + " Computadora\n");
	} else if (jugador === 3) {
		alert("¡Felicidades has ganado!\nUsuario " + jugador + " - " + cpu + " Computadora\n");
	}
}