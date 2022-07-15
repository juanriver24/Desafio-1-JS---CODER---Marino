// Calcular costo de envío + preciofinal

let distanciaEnvio = prompt ("Ingrese a cuantos km se encuentra de CABA")

const costoEnvio1 = 350 ;

const costoEnvio2 = 450 ;

const precioZapas = 1200 ;

const precioCampera = 1500 ;

function costoEnvio (){

    if (distanciaEnvio <= 100){
        console.log ("El costo de envio es de $" + costoEnvio1);
    } else {
        console.log ("El costo de envio es de $" + costoEnvio2);
    }   
} 

function calcularTotal (precioZapas,precioCampera,costoEnvio) {
    precioFinal = precioZapas + precioCampera + costoEnvio

    console.log ("El total de su pedido es $" + precioFinal)
}

/* Hola profe. Al borrar la funcion "costoEnvio" (dejando solo el if) funciona perfectamente, pero
entonces no se como incluirlo dentro del calculo total. */ 





