function numero_secreto(){
    //Numero maximo
    var max = 11;
    //numero minimo
    var min = 1;

    var numero_secreto = Math.random() * max;
    var numero_secreto = parseInt(numero_secreto);

    if (numero_secreto == 0) {
      numero_secreto = 1;
    }
    console.log(numero_secreto);

    var mensaje = "Ingresa un número para adivinar el número secreto";

    while(true){
      
        var numero_del_usuario = prompt(mensaje);
        numero_del_usuario = parseInt(numero_del_usuario);

        if(numero_del_usuario === numero_secreto){
            alert("Ganasteeee!! Adivinaste el número secreto");
            break;
        }
        else if(numero_del_usuario === 0){
            break;
        }
        else if(numero_del_usuario > numero_secreto){
            mensaje = "El número que ingresaste es mayor al número secreto";
        }
        else if(numero_del_usuario < numero_secreto){
            mensaje = "El número que ingresaste es menor al número secreto";
        }
    }
}