// for 

// 3 REGLAS QUE SE DEBEN CUMPLIR
/*
1. INICIALIZACION. Una variable de control (Donde empiezo ?)
2. CONDICION. En los DF es el rombo (Hasta donde llego, Itero ? )
3. ACTUALIZACION. El incremento o cambio (Como avanzo al sgte paso?)
*/

// While y Do-while, 1. INICIALIZACION, 2. CONDICION, 3. ACTUALIZACION estan en diferentes lineas
// for coloca todo junto

// SINTAXIS
/*
for(inicializacion; condicion; incremento){
    // codigo a repetir
}

*/

// la variable de inicializacion se deberia nombrar <i> , (por index o iterador)

console.log('Contador FOR 1-10')

for(let i = 5; i<=100; i += 5){
    console.log(`Valor del contador: ${i}`)
}
console.log('FIN LOOP')

