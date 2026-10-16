// funciones que retornan cosas, nos permiten trabajar con la devolucion

function sumar(a = 0, b = 0){
    return a + b;
}

const resultado = sumar(5, 5)
console.log(resultado )

// ejemplo
console.log('» Carrito de compras')

let total = 0;

function agregarCarrito(precio){
    return total += precio
    //total = total + precio
}

function calImp(total){
    return total * 1.15;
}


let totalCompra = agregarCarrito(100);
totalCompra = agregarCarrito(700);
totalCompra = agregarCarrito(300);

const totalMasImp = calImp(totalCompra);
console.log(`El total es de ${totalCompra}, precio final + impuestos ${totalMasImp}`)




