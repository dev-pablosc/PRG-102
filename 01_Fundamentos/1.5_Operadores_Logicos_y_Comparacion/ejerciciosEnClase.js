// Operadores de Comparacion (> , < , >=, <=, Igualdades, !=)
let a = 5
let b = 10

// respuestas booleans
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

// igualdades (= , ==, === )
// = -> asignacion
let c = '5'
console.log(a == b) // 5 - 10
console.log(a === b) // 5 - 10

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
console.log(a == c ) // 5 - '5'   == compara SOLO el valor
console.log(a === c ) // 5 - '5'  === compara el VALOR y TIPO de DATO


// OPERADOR LOGICOS (3)
console.log('>>>>>>>>>>>>>>>>>> Ope LOGICOS ####################')
// AND > && -> (Si uno es FALSE TODO es FALSO)
console.log(5 > 10 && 15 > 20); // f y f
console.log(5 < 10 && 15 < 20) // v y v
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// OR > || -> (Si uno VERDAD TODO es VERDAD)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)


// NOT > ! -> (Devuelve el contrario)
console.log(!true)

console.log('ejercicios de Boolean')
console.log(!(true && false) || (false || !true) && true) 

