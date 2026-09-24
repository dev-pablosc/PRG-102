// Switch
// sintaxis

/*
switch (casoComparacion){
    case 0:
        // lo que se realiza
        break
    case 1:
        // lo que se realiza
        break
    case 2:
        // lo que se realiza
        break
    
    ...

    default:
        // 
}
*/

// ejemplo 1
let dia = 10;
let nombreDia;

switch(dia){
    case 0:
        nombreDia = 'Lunes'
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia = "Domingo"
        break

    default:
        nombreDia = 'Numero de dia incorrecto'

}

console.log(nombreDia)

// ejemplo 2
let dia2 = 'jueves';

switch(dia2){
    case 'lunes':
        console.log('Dia laboral')
        break
    case 'martes':
        console.log('Dia laboral')
        break
    case 'miercoles':
        console.log('Dia laboral')
        break
    case 'jueves':
        console.log('Dia laboral')
        break

    ///

    default:
        console.log('Dia no existe')

}