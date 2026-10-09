// Bloque de codigo cuya funcion es la reutilizacion de CODIGO
// Es un conjunto de intrucciones agrupas bajo un mismo nombre

// Hay 2 REGLAS
/*
1. Declaracion (crear)
2. Llamada o ejecucion
*/


// Crear Funcion (2)

// 1. function declaration
function sumar(){
    console.log(2+2)
}
// llamda a funciones
sumar();
sumar();


// 2 Expresion de funcion (function Expression)
const sumar2 = function(){
    console.log(3+3)
}

sumar2();

// arrowFunction
const sumar3 = () => {
    console.log(4+4)
}

sumar3();

