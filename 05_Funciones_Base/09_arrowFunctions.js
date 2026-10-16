// funciones tipo flechas / funciones anonimas

/*
function aprendiendo(){
    console.log('Aprendiedno JS')
}*/

const aprendiendo = function(){
    console.log('Aprendiedno JS')
}
aprendiendo()

const aprendiendo2 = () => {
    console.log('Aprendiedno PG')
}
aprendiendo2()

// Si la respuesta es una sola linea las llaves son opcionales
const aprendiendo3 = () => console.log('Aprendiedno Py')
aprendiendo3()

//  
const aprendiendo4 = () => 'Aprendiedno React'
console.log(aprendiendo4())