// agregar elementos (3)

const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log(semana)

// Agregar por indice 
// Si el indice existe se actualiza  - Si no existe Se crea
// existe
semana[1] = 'Martesssss'
semana[6] = 'Domingo'
console.log(semana)

// nombrevariable.NombreMetodo()

// Agregar al FINAL -> push
semana.push(':)')
console.log(semana)


// Agregar al INICIO -> unshift
semana.unshift('Dias de la semana')
console.log(semana)
