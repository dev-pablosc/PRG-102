// Metodos para eliminar
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log(semana)

// Eliminar del FINAL  -> pop()
semana.pop()
console.log(semana)

// Eliminar el INICIO -> shift()
semana.shift();
console.log(semana)


// eliminar elemento especifico -> splice
semana.splice(1, 3)
console.log(semana)