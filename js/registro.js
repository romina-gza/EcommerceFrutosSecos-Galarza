const  span = document.querySelector('#ingSesion'),
// inputs del registro
    nameReg = document.querySelector('#nameReg'),
    userReg = document.querySelector('#userReg'),
    emailReg = document.querySelector('#emailReg'),
    passwordReg = document.querySelector('#passwordReg'),
    btnReg = document.querySelector('#registrame');

// El operador or simplifica el condicional if ...
/* let usuarios;
if (localStorage.getItem('usuarios')){
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
} else {
    usuarios=[];
}; */
// ... por la linea siguiente
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
console.log(usuarios);

// crear una funcion constructora. 
class Usuario{ 
 constructor (name, user, email, password) {
        this.name = name;
        this.user = user;
        this.email = email;
        this.password = password;
    }
}
    
function limpiarInputs() {
    nameReg.value = "";
    userReg.value = "";
    emailReg.value = "";
    passwordReg.value = "";
}
// Guardar el LS
function guardarEnLocalStorage(elemento){
    return localStorage.setItem('usuarios', JSON.stringify(elemento));
}
//Evento
// El usuario hace click en el boton -
btnReg.addEventListener('click', (e)=>{
    e.preventDefault()
    //guardar al usuario
    let newUser = new Usuario (nameReg.value, userReg.value, emailReg.value, passwordReg.value);
    usuarios.push(newUser);    // guarda los datos del usuario - 
    console.log(newUser);
    guardarEnLocalStorage(usuarios);    // guardado en el Local Storage -
    limpiarInputs();    // limpia las entradas -
    window.location.href = "../index.html";    // y envia al usuario a la hoja index.html (pagina principal). 
}) 