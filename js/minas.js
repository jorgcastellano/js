function acierto() {
	accion.textContent = "¡Excelente! Has pisado cesped";
}

function explosion(){
	accion.textContent = "Has Pisado una mina";
	alert ("¡BOOOOMM!");
}

function winner(){
	accion.textContent = "Felicidades, has ganado la partida!";
	comenzar.textContent = "Intentarlo de nuevo"
}

function loser(){
	accion.textContent = "Lamentablemente has perdido, intenta de nuevo";
	comenzar.textContent = "Intentarlo de nuevo"
}
function generador(){
	var arreglo = [];
	for (var i = 0; i < 5; i++) {
		arreglo[i] = [];
		for (var j = 0; j < 5; j++) {
			arreglo[i][j] = Math.round(Math.random());
			console.log(arreglo[i][j]);
		}
	}
	return arreglo;
}

function campo_minado() {

	//botonMinas.textContent = ""

	//0 Cesped, 1 Bomba

	var campo = generador();

	var nombres = ["Cesped", "Bomba"];
	var x, y, aciertos = 0, intentos = 0;

	alert (	"Estás en un campo minado\n" +
			"Ingrese la posición del campo a elegir (valores entre 0 y 4)");

	while ((aciertos != 3) && (intentos < 5)) {
		x = prompt ("Posicion X: ", 0);
		y = prompt ("Posicion Y: ", 0);

		if ((x >= 0 && x <= 4)&&(y >= 0 && y <= 4)) {
			var posicion = campo[x][y];
			console.log(posicion);
			alert ("Elegiste " + nombres[posicion]);
			if (nombres[posicion] == "Cesped") {
				acierto();
				aciertos++;
				if (aciertos == 3) {
					winner();
				}
			}
			else{
				explosion();
			}
		}
		else{
			alert ("Te saliste del campo minado");
			explosion();
		}
		intentos++;
		if (intentos == 5) {
			loser();
			accion.textContent = "La partida ha finalizado";
		}
	}
}