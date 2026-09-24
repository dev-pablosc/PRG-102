/*
CASO 1: SISTEMA DE DESCUENTOS (Uso de operadores lógicos && y ||)
Problema: Una tienda da un 20% de descuento SI el cliente compra más de $100 Y (&&) tiene tarjeta VIP. 
O TAMBIÉN da descuento si es el día de aniversario de la tienda (sin importar lo demás).
*/

let totalCompra = 200;
let tieneTarjeta = false;
let esAniversario = false;

if( (totalCompra > 100 && tieneTarjeta === true) || esAniversario === true ){
    console.log('Tiene Desc');
    let precioFinal = totalCompra - (totalCompra * 0.20)
    console.log(`Precio final es de ${precioFinal}`)
} else {
    console.log(`No tiene desc, su total es ${totalCompra}`)
}

/*
if(  esAniversario === true ){
    console.log('Tiene Desc');
} else if (totalCompra > 100 && tieneTarjeta === true){
    //
} else {


}

// 
if(  totalCompra > 100 ){
    if (tieneTarjeta === true){
        //desc
    } else {
        // ❌
    }
} else if (esAniversario === true){
    // desc
} else {
 //❌
}

*/

/*
CASO 2: CONDICIONALES ANIDADOS (Un 'if' dentro de otro 'if')
Problema: Un cajero automático. 
Paso 1: Validar el PIN. 
Paso 2: Si el PIN es correcto, validar si hay saldo suficiente para retirar.
*/

let pinCorrecto = 1234;
let saldoCuenta = 500;

let pinIngresaso = 14;

let montoRetirado = 200;

if(pinIngresaso === pinCorrecto){
    console.log('Pin correcto, ingresando espere ...')

    if (montoRetirado <= saldoCuenta){
        console.log(`Retiro correcto $ ${montoRetirado}, su saldo restante es $ ${saldoCuenta - montoRetirado}`)
    } else {
        console.log('Error saldo insuficiente . . .')
    }

} else {
    console.log('Pin incorrecto')
}