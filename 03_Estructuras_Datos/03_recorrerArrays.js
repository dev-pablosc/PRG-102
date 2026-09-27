// Recorrer un Array (3)

const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
console.table(semana)

// Conocer la longitud (Nª de elementos)
console.log(semana.length)
console.log(semana[semana.length - 1])

// Iterar  -  Recorrer array
for(let i = 0; i<semana.length; i++){
    console.log(semana[i])
}

// for of
console.log('>>>>>>>>>>>>>>>>>>>>for of')
for(let v of semana ){
    console.log(v)
}



// forEach

