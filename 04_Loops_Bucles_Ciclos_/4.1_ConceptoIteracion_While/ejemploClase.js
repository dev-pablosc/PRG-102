// Iteracion

// iterar significa repetir un proceso

// 3 REGLAS QUE SE DEBEN CUMPLIR
/*
1. INICIALIZACION. Una variable de control (Donde empiezo ?)
2. CONDICION. En los DF es el rombo (Hasta donde llego, Itero ? )
3. ACTUALIZACION. El incremento o cambio (Como avanzo al sgte paso?)
*/


// SINTAXIS WHILE
/*
while(condidicion){
    // si es verdad se ejecuta
}
*/

// ej CONTADOR 
// 1. INICIALIZACION
let c = 1;

// 2. CONDICION
while(c <= 10){
    // lo que esta aqui adentro se repite
    console.log(`Valor del contador: ${c}`);

    // 3. ACTUALIZACION - INCREMENTO
    /* 
    Opcion A: contador = contador + 1;
    Opcion B: contador += 1 ;
    Opcion C: contador++
    */
    c++; 
}

console.log('Fin del loop')