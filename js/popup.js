// Log In
 const  abrirBtnUser = document.getElementById('abrirBtnUser'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        cajaCambio = document.getElementById('change'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
        cajaCambiada = document.getElementById('changed'),
        // variables de REGISTRO
        btnRegistrar = document.getElementById('registrar'),
        // inputs PopUp Inicio sesion
        passwordReg = document.querySelector('#passwordReg'),
        userReg = document.querySelector('#userReg'),
        recordar = document.querySelector('#check'),
        btnIngresar = document.querySelector('#ingresar'),
        mensajeLogin = document.querySelector('#mensaje-login');


// Eventos de login - inicio sesion - 
// Caracteristica = Al hacer click en abrirBnUser (icon person/user) se abre una ventana pequeña(un PopUp) que 
// a su vez cambia un div (#change) a una posicion que hace que se esconda el mismo div.

abrirBtnUser.addEventListener('click',()=>{
    overlay.classList.add('active');
    popup.classList.add('active');
    cajaCambio.classList.add('active');
    cajaCambio.style.position = "relative";
});

// Caracteristica: Un clic en el icon "x" saca de la ventana el Pop Up.

btnCerrarPopup.addEventListener('click',()=>{
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

// Inicio Sesion
function logIn(usuarios) {
    let encontrarUser = usuarios.find(usuario=>{
        return usuario.user == userReg.value && usuario.password == passwordReg.value;
    });
    // Si coinciden los datos de user y password devolver html, de lo cotrario, mensaje "ups!..."
    encontrarUser ? window.location.href = "./index.html" : mensajeLogin.innerHTML = "Ups! Usuario no existente. Regístrate para ingresar.";
}
//Recuperar datos
function recuperarLS() {
    let datosUser = JSON.parse(localStorage.getItem('usuarios'));
    console.log(datosUser)
    return datosUser;
}
const usuariosLS = recuperarLS();

btnIngresar.addEventListener('click',(e)=> {
    e.preventDefault();
    logIn(usuariosLS);
})



//REGISTRO 
// Caracteristica: Abre hoja html de registro desde index.html a registro.html
btnRegistrar.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = "../pages/registro.html";
}) 
/* fallido - Ignorar!.
btnRegistrar.addEventListener('click',()=>{
    
    let nuevoRegistro;
    nuevoRegistro = `
    <h3>Registrar</h3>
    <form action="">
    <div class="contenedor-inputs-registrar">
    <input id="nameReg" type="text" name="Nombre" placeholder="Nombre" required>
    <input id="userReg" type="text" placeholder="Usuario" required>
    <input id="emailReg" type="email" placeholder="Correo Electrónico" required>
    <input id="passwordReg" type="password" placeholder="Contraseña" required>
    </div>
    <input id="registrame" type="submit" class="btn-submit-registrar" value="Registrarme">
    </form>`;

    cajaCambiada.innerHTML = nuevoRegistro; 
    cajaCambiada.classList.add('active');
    cajaCambio.classList.remove('active');
    cajaCambio.style.position = "absolute";
});
 */

