// Strings

// Concatenacion
let miNombre = 'Pablo'
let saludo = 'Bienvenido ' + miNombre + '!' 
let saludo2 = `Bienvido ${miNombre} !` // interpolacion

console.log(saludo2)

//alert(saludo)

// Longitud 
console.log(saludo.length)

// Acceder a caracter
console.log(miNombre[0])
console.log(miNombre[2])
console.log(miNombre[5]) // undefined


// Metodos Comunes >> nombreVariable.NombreMetodo()

let x = 'PruEbAAS'
console.log(x)
console.log(x.toLowerCase()) // todo mminuscula
console.log(x.toUpperCase())

console.log(x.indexOf('Pablo')) // Si no existe devuelve -1
console.log(miNombre.indexOf('l')) // buscador

console.log(x.includes('Pablo')) // devuelve Boolean
console.log(miNombre.includes('Pablo'))

console.log(x.replace('PruEbAAS', 'Testing'))