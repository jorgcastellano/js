function numero_secreto(){
    //numero minimo
    var min = 1;
    //Numero maximo
    var max = 10;

    var numero_secreto = Math.round(Math.random() * ((max + 0.4) - (min - 0.5)) + (min - 0.5));
    console.log(numero_secreto);

    var mensaje = "Ingresa un número para adivinar el número secreto";
    var ni = 0;

    while(true){
        ni++;
        var numero_del_usuario = parseInt(prompt(mensaje));

        if(numero_del_usuario === numero_secreto){
            mensaje = "Ganasteeee!! Adivinaste el número secreto\nRequeriste de " + ni + " intentos";
            alert(mensaje);
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