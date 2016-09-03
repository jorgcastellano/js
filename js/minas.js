function acierto() {
	accion.textContent = "¡Excelente! Has pisado cesped";
}

function explosion(){
	accion.textContent = "Has Pisado una mina";
	alert ("¡BOOOOMM!");
}

function winner(){
	accion.textContent = "Felicidades, has ganado la partida!";
}

function loser(){
	accion.textContent = "Lamentablemente has perdido, intenta de nuevo";
}
function campo_minado() {

	//botonMinas.textContent = ""

	//0 Cesped, 1 Bomba
	var campo = [ 	[ 0, 1, 1, 0, 0],
					[ 1, 0, 0, 1, 1],
					[ 0, 1, 0, 0, 0],
					[ 1, 0, 1, 0, 1],
					[ 0, 1, 0, 0, 1]
				];

	var nombres = ["Cesped", "Bomba"];
	var x, y, aciertos = 0, intentos = 0;

	alert (	"Estás en un campo minado\n" +
			"Ingrese la posición del campo a elegir (valores entre 0 y 4)");

	while ((aciertos != 3) && (intentos < 5)) {
		x = prompt ("Posicion X: ");
		y = prompt ("Posicion Y: ");

		if ((x >= 0 && x <= 4)&&(y >= 0 && y <= 4)) {
			var posicion = campo[x][y];
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