// Como se comunican las funciones entre si

inciarApp();

function inciarApp(){
    console.log('Iniciando Aplicacion ...');
    segundaFuncion();
}

// 2da Funcion
function segundaFuncion(){
    console.log('Hola desde la segunda funcion »')

    const usuario = prompt('Introduce tu username');
    console.log(`Este es el nombre que entro por teclado ${usuario}`);

    // 3era funcion
    userAuth(usuario);
}


// 3er funcion

function userAuth(user){
    console.log('Autenticando desde la 3era funcion');
    
    //validacion
    if(user === 'admin'){
        console.log('Modo Administrador')
    } else{
        console.log('Bienvenido Usuario')
    }
}