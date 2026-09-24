// Sintaxis
/*
if(pregunta Logica){
    // scoop Si es verdad
} else {
    // scoop NO es verdad
}
*/

let num = 12;

if(num > 0){
    console.log('Positivo')
} else {
    console.log('Negativo')
}

// Esto da un error -> ejecutar en navegador
/*
let num2 = prompt('Ingrese un numero');
if(num2 > 0){
    alert('Positivo')
} else {
    alert('Negativo')
}*/

// ejemplo 2

let contraseña = '12345'
let contraseñaCorrecta = 'admin123'

console.log('Inicio de sesion . . .');

if(contraseña === contraseñaCorrecta){
    console.log('Bienvenido')
} else {
    console.log('Contraseña incorrecta')
}

// ejemplo 3
let productoX = false;

if(productoX){
    console.log('Disponible en la tienda')
} else {
    console.log('No hay stock')
}