function acierto() {
	document.write ('<!DOCTYPE html><html lang="es"><head><title>Mini-juegos en JavaScript</title><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap.min.css"><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"><link rel="stylesheet" type="text/css" href="css/estilos.css"></head><body><div id="cajon"><header><div class="container-fluid"><h1 id="espacio" class="text-center bg-primary no-margin">Mis juegos con JavaScript</h1></div></header><div class="container" id="contenido"><div class="row"><div class="col-xs-12 text-center"><h2>Juego Campo Minado</h2><p>¡Excelente! Has pisado cesped <b>=D </b></p></div></div></div></div><footer><div class="container-fluid text-center" id="footer"><h4 id="espacio" class="bg-primary no-margin">@jorgcastellano</h4></div></footer><script type="text/javascript" src="css/bootstrap/js/jquery.min.js"></script><script type="text/javascript" src="css/bootstrap/js/bootstrap.min.js"></script></body></html>');
}

function explosion(){
	alert ("¡BOOOOMM!");
	document.write ('<!DOCTYPE html><html lang="es"><head><title>Mini-juegos en JavaScript</title><meta charset="UTF-8"><link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap.min.css"><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"><link rel="stylesheet" type="text/css" href="css/estilos.css"></head><body><div id="cajon"><header><div class="container-fluid"><h1 id="espacio" class="text-center bg-primary no-margin">Mis juegos con JavaScript</h1></div></header><div class="container" id="contenido"><div class="row"><div class="col-xs-12 text-center"><h2>Juego Campo Minado</h2><p>Pisaste un campo minado <b>=( </b></p></div></div></div></div><footer><div class="container-fluid text-center" id="footer"><h4 id="espacio" class="bg-primary no-margin">@jorgcastellano</h4></div></footer><script type="text/javascript" src="css/bootstrap/js/jquery.min.js"></script><script type="text/javascript" src="css/bootstrap/js/bootstrap.min.js"></script></body></html>');
}

function winner(){
	alert ("Felicidades, has ganado la partida!");
}

function loser(){
	alert ("Lamentablemente has perdido, vuelvelo a intentar");
}
function campo_minado() {

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

	while (intentos < 5 || aciertos == 3) {
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
		}
	}
}