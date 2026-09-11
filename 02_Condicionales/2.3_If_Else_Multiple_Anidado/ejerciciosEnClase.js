// Sintaxis

/* 1er Caso
if(){
    if(){
    
    } else{
        
    }
} else {
    
}

###############################################
2do Caso
if(){

} else if (){

} else if() {

} else {

}


*/

// Ejemplo 1

let edad = 56;
let licencia = false

if (edad >= 18){
    if(licencia){
        console.log('Puede Conducir')
    } else {
        console.log('Es mayor Pero no tiene licencia')
    }
} else {
    console.log('No puede conducir')
}


console.log('2 CASO')

let semaforo = 'rojo';

if(semaforo === 'verde'){
    console.log('puede avanzar')
} else if (semaforo === 'amarillo'){
    console.log('precaucion ...')
} else if(semaforo === 'rojo'){
    console.log('Detente')
} else {
    console.log('No existe este color')
}

// Categorias por edad
console.log('Ejemplo categoria edad >>>>>>>>>>>>>>>>>>>>>>>')
let edadPersona = 70;

if(edadPersona >= 70){
    console.log('Tercera Edad')
} else if (edadPersona >= 18){
    console.log('Mayor de edad')
} else if (edadPersona >= 13){
    console.log('Adolescente')
} else {
    console.log('niño')
}

// error logico
console.log('ERROR···················')
let edadPersona2 = 70;

if(edadPersona2 >= 18){
    console.log('Mayor de edad')
} else if (edadPersona2 >= 13){
    console.log('Adolescente')
} else if (edadPersona2 >= 70){
    console.log('Tercera edad')
} else {
    console.log('niño')
}