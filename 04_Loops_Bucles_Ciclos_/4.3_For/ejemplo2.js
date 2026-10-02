
// ARRAY 
let miArray = ['Manzanza', 'Naranja', 'Mango', 'Frutilla', 'Banana']
// console.log(miArray.length) >> tamaño
/*
console.log(miArray[0])
console.log(miArray[1])
*/
miArray.pop()

// for 

for(let i = 0; i<miArray.length; i++){
    console.log(miArray[i])
}
console.log('FIN CICLO')


// for of
console.log('############## for of')
for(let v of miArray ){
    console.log(v)
}


// ej2
let nombre = 'PabloSC'
console.log('························· ejemplo 2.........................')
//console.log(nombre.length)

for(let indice = 0; indice<nombre.length; indice++){
    console.log(nombre[indice])
}




// forEach