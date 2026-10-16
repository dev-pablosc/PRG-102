// pasar parametros en arrow funct

// funcion anonima
const aprendiendo = function(tecno){
    console.log(`Aprendiendo ${tecno}`)
}
aprendiendo('Java')

//tipo flecha
const aprendiendo2 = (tecno) => {
    console.log(`Aprendiendo ${tecno}`)
}
aprendiendo('Next')

const aprendiendo3 = (tecno) => `Aprendiendo ${tecno}`
console.log(aprendiendo3('NodeJS'))
