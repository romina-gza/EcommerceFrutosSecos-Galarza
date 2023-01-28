const buscarProducto = document.querySelector('#search-input'),
    searchBoton = document.querySelector('#search'),
    cajaProductos = document.querySelector('.box-productos'),
    // variables de filtros - checks - precio
    checkPiwen = document.getElementById('piwen'),
    checkNutsgo = document.getElementById('nuttsGo'),
    checkSarmiento = document.getElementById('sarmiento'),
    checkAlifrut = document.getElementById('alifrut'),
    // boton para mostrar todos los productos 
    btnShowAll = document.getElementById('btn-show-all');

const boxChecks = document.querySelectorAll('input[type="checkbox"]'); 

//Funcion Constructora
const productList = []; // Lista de productos.
function AddProductList(name, marca, precio, gramos, descripcion, img) {
    this.id = `LA${productList.length + 1}`;
    this.name = name;
    this.marca = marca;
    this.precio = precio;
    this.gramos = gramos;
    this.descripcion = descripcion;
    this.img = img;
    //método
    this.precioPorCantidad = (cantidad)=> {
        return this.precio * cantidad;
        //cálculo para el carrito - precio por cantidad ingresa por el usuario.
    };
}

/* objeto para testeos y usos futuros - ¡¡IGNORAR!!
//Objeto 
const codigoPostal = [
    {cp: 5513, localidad: 'COQUIMBITO'},
    {cp: 5561, localidad: 'CORDON DEL PLATA'},
    {cp: 5613, localidad: 'CORONEL BELTRAN'},
    {cp: 5519, localidad: 'CORONEL DORREGO'},
    {cp: 5590, localidad: 'CORRAL DE CUERO'},
    {cp: 5632, localidad: 'COMPUERTAS NEGRAS'},
    {cp: 5500, localidad: 'CIUDAD DE MENDOZA'}
];
//crear F.Constructora en proceso
function EnvioADomicilio(cp, localidad, precio) {
    this.cp = cp;
    this.localidad = localidad.toUpperCase;
    this.precio = precio;
 //método
    this.costoEnvio = (localidad)=>{
        switch (localidad) {
            case value:
                
                break;
        
            default:
                break;
        }
    };
} 
*/

// crearTarget Crea cada "card" de cada producto 


let productAdded = [];

// Target de producto dentro del carrito
function crearMiniTarget(arr){
    let littleHtml;
    carritoContent.innerHTML = "";

    for (const producto of arr) {
        littleHtml = 
    `<div class="box-product-added">
        <img src="./assets/img-productos/${producto[0].img}">
        <div class="texto-carrito">
        <p>${producto[0].name} - ${producto[0].marca}</p>
        <p>${producto[0].gramos} gr/mililitros</p>
        </div>
        <div class="btn-less-num-add">
            <input class="less" id="less" type="button" value="-">
            <input class="num" id="num" type="number" min="1" value="1">
            <input class="add" id="add" type="button" value="+">
        </div>
        <span>$ ${producto[0].precio}</span>
        <i class="fa-solid fa-trash-can"></i>
    </div>`;
    carritoContent.innerHTML += littleHtml;
    }
}

   
    function guardarEnArr(arr){
        productAdded.push(arr);
    }

//FETCH 
async function firstAPI(){
    const response = await fetch('./data/data.json');
    const datos = await response.json();

    //console.log(marcaAll)
    /* datos.forEach(datosP => {
        //  console.log( datosP.marca);
    }) */
    console.log(datos);
    const marcaAll = datos.marca;
    console.log(marcaAll)
    console.log(datos[0].marca)
    crearTarget(datos)

    /*  const filtrarCheck = () => {
        let filtrosParaCheckear = [checkPiwen, checkNutsgo , checkSarmiento, checkAlifrut];
         let proceso = filtrosParaCheckear.forEach(element => {
            let marcas = datos.forEach(elemento => elemento.marca);
            if (element.checked == marcas){
                console.log('Funciona')
            } else ('no funciona')
        });
    }; */


    boxChecks.forEach(boxCh => {
        boxCh.addEventListener('change', ()=>{
            if (!boxCh.checked) {
                crearTarget(datos)
            } else {
                let encuentra = boxCh.value ;
                let mostrar = filtrarProductosMarca(encuentra);
                crearTarget(mostrar);
                console.log(mostrar)
            } 
        })           
        
    })

console.log(datos)

    function filtrarProductosID(filtro) {
        let filtrar = datos.filter((el)=>{
            return el.id.includes(filtro);
        });
        return filtrar;
    }
    // ------------>
    function crearTarget(arr) {
        console.log(arr)
        let html;
        cajaProductos.innerHTML = "";
        for (const producto of arr) {
            const {id, name, precio, marca, gramos, img} = producto;
            html = 
            `<div class="container">
                <div class="img-card">
                    <img src="./assets/img-productos/${img}">
                </div>
                    <div class="texto">
                        <p class="name-card">${name} - ${marca}</p>
                        <p>${gramos}gr/mililitros</p>
                        <span class="precio"><strong>$ ${precio}</strong></span>
                        <div>
                            <div class="btn-less-num-add">
                                <input class="less" id="less" type="button" value="-">
                                <input class="num" id="num" type="number" min="1" value="1">
                                <input class="add" id="add" type="button" value="+">
                            </div>
                            <button class="boton" id="${id}" value="Comprar"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
            </div>`;
            cajaProductos.innerHTML += html;
            
        }
        // vuelvo a hacer el querySelector y vuelvo a agregar eventos. Ahora por más que filtremos, agrega.
    
        const btnLess = document.querySelectorAll('.less'),
        inputNum = document.querySelectorAll('.num'),
        btnAdd = document.querySelectorAll('.add');
        const agregarAcarrito = document.querySelectorAll('.boton'); 
    
            for (let i = 0; i < btnAdd.length; i++) {
                btnAdd[i].addEventListener('click', () => {
                    inputNum[i].value = parseInt(inputNum[i].value) + 1;
                    console.log('FUNCIONA??')
                })
            }
            for(let i=0; i < btnLess.length; i++) {
                btnLess[i].addEventListener('click', ()=>{
                    if (inputNum[i].value > 1){
                        inputNum[i].value = parseInt(inputNum[i].value) - 1;
                    }
                })
            }
             /* Caracteristica: cuando se haga click *se buscará el id del boton que se clickeo, **se filtrara en todos los productos
            el id y ***luego se guardara en un array. ****Por ultimo se creara un pequeño contenedor html en el carrito con el array donde se guardan todos los productos que fueron clickeados */
            for(let i=0; i < agregarAcarrito.length; i++) {
                agregarAcarrito[i].addEventListener("click", function() 
                {
                    let resp = this.id; // *
                    console.log(resp)
                    filtrarProductosID(this.id); // **
                    guardarEnArr(filtrarProductosID(this.id)) // *** 
                    crearMiniTarget(productAdded) // ****
                    console.log(filtrarProductosID(this.id))
                }); 
            } 
    }
    // <------------

function filtrarProductos(filtro) {
    let filtrar = datos.filter((el)=>{
        return el.name.includes(filtro);
    });
    return filtrar;
}

// otros de shop.js
    // Carcateristica: Cuando el usuario escribe un producto en la entrada se busca el valor, se filtra y se crea el card del producto.
    // Si la busqueda no devuelve nada, entonces devuelve un h3.
    searchBoton.addEventListener('click', (e)=>{
        e.preventDefault();
        let filtro = filtrarProductos(buscarProducto.value.toLowerCase());
        console.log(filtro);
        crearTarget(filtro); 
        // si el producto que busca no existe devuleve el h3 y su contenido.
        if (filtrarProductos(buscarProducto.value.toLowerCase()) == ""){
            cajaProductos.innerHTML = "<h3>Lo siento no hay stock. Busca otro producto.</h3>";
        }
    })
    

    function filtrarProductosMarca(filtro) {
        let filtrar = datos.filter((el)=>{
            return el.marca.includes(filtro);
        });
        return filtrar;
    }

} 

firstAPI();


const cerrarCarrito = document.getElementById('btn-cerrar-carrito'),
    sectionCarrito = document.getElementById('section-carrito'),
    boxCarrito = document.getElementById('box-carrito'),
    carritoContent = document.getElementById('carrito-content'),
    btnVaciarCarrito = document.getElementById('btn-vaciar-carrito'),
    btnAbrirCarrito = document.getElementById('abrir-carrito'),
    // queryall
    inputCantProd = document.getElementById('cantidadProd');


btnAbrirCarrito.addEventListener('click', ()=>{
    sectionCarrito.classList.add('active');
    boxCarrito.classList.add('active');
})

cerrarCarrito.addEventListener('click', ()=>{
    sectionCarrito.classList.remove('active');
    boxCarrito.classList.remove('active');
})
/* 
let productAdded = [];

// Target de producto dentro del carrito
function crearMiniTarget(arr){
    let littleHtml;
    carritoContent.innerHTML = "";

    for (const producto of arr) {
        littleHtml = 
    `<div class="box-product-added">
        <img src="./assets/img-productos/${producto[0].img}">
        <div class="texto-carrito">
        <p>${producto[0].name} - ${producto[0].marca}</p>
        <p>${producto[0].gramos} gr/mililitros</p>
        </div>
        <div class="btn-less-num-add">
            <input class="less" id="less" type="button" value="-">
            <input class="num" id="num" type="number" min="1" value="1">
            <input class="add" id="add" type="button" value="+">
        </div>
        <span>$ ${producto[0].precio}</span>
        <i class="fa-solid fa-trash-can"></i>
    </div>`;
    carritoContent.innerHTML += littleHtml;
    }
}

   
    function guardarEnArr(arr){
        productAdded.push(arr);
    }
 */
    // botones de crearTarget de productos.


