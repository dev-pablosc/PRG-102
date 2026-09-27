//  #################### Destructuring
let miArray = [1, 2, 3, 4]
console.log(miArray)


let[indice0, , indice2, indice3,  ] = miArray // se puede ignorar un valor dejando un espacio en blanco

console.log(indice0)
console.log(indice2)


// valores predeterminados
let[ind0 = 0, , ind2 = 0, ind3 = 0, v4 = 0 ] = miArray

console.log(ind0)
console.log(ind2)
console.log(v4)



// ########################### Spread operator(...)

let miArray2 = [...miArray]
console.log(miArray2)




const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log(semana)
