// Variables (Let y Const)

// Que es una variable ?
/*
Es un espacio de memoria que sirve para guardar datos (cualquier tipo)
Es como una caja donde guardamos cosas y le ponemos un nombre para saber que tiene;


Existen 3 maneras para crear variables ->palabras Reservadas (let, const, ❌var)

*/

//1. Creando variables con LET (se puede modificar)
let estatura; // Variable creada o definida
let nombreEstudiante = 'Jose Luis'; // Variable creada y esta ASIGNADA

console.log(nombreEstudiante)
console.log(estatura)


// Diferencia Let & Const
let peso = '75 kg';

console.log('Tu peso es:', peso)

//  modificar el peso
//❌ let peso 

peso = '80 kg';
console.log('Tu peso es:', peso)

peso = 85;
console.log('Tu peso es:', peso, 'Kg')


//2. Creando variables con CONST (no se modifica)
const fechaNacimiento = '15/07/1980';
const numeroPI = 3.1416;

console.log(fechaNacimiento)


/* Error logico No se puede asignar un  nuevo valor a una constante
fechaNacimiento = '15/07/1985';
console.log(fechaNacimiento)
*/

