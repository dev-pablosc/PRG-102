// parametros por default 

function sumar(a=0, b=0){
    return a + b
}

console.log(sumar(2))



// ej2

function saludar (nombre ='No ingreso su nombre' , apellido = ''){
    console.log(`Bienvenido ${nombre} ${apellido}`)
}

saludar('Pablo')