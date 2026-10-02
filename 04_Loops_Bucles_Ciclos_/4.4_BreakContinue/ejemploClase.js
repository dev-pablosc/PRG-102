// Break - Romper o Detener
// Continue -  Saltar / Ignorar / Continuar

// Ejemplo BREAK
// Contador del 1 a 10
for(let i = 1; i<1000000; i++){
    
    if(i === 7){
        console.log('Numero Encotrado ' + i);
        break; // Aqui termina todo automaticamente
    }
    console.log(i)
}

// Ejemplo Continue

for(let c = 1; c<10; c++){
    if(c === 7){
        continue; // Aqui termina todo automaticamente
    }
    console.log(c)
}