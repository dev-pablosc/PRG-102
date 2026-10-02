// Do-While

// 3 REGLAS QUE SE DEBEN CUMPLIR
/*
1. INICIALIZACION. Una variable de control (Donde empiezo ?)
2. CONDICION. En los DF es el rombo (Hasta donde llego, Itero ? )
3. ACTUALIZACION. El incremento o cambio (Como avanzo al sgte paso?)
*/

// SINTAXIS

/* 
do{
    // se ejecuta si es verdad
} while(condicion)
*/

//1
let numero = 12;

//
do{
    console.log(`Valor del contador: ${numero}`);
    // 3 //numero = numero + 1;
    numero ++

} while(numero <= 10) //2

console.log('Fin del loop')

// La diferencia con WHILE
// Do-while asegura que al menos una vez se iterar

// ej de DIF
let saldo = 0; //1
console.log('---- evaluando while, saldo 0');
// 2
/*
while(saldo > 0){
    console.log('Compraste un articulo con while');
    saldo --;
}
*/

console.log('---- evaluando do-while, saldo 0');
do{
    console.log('Compraste comprar con do-while');
    saldo--
} while( saldo > 0)