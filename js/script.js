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
    function filtrarProductos(filtro) {
        let filtrar = datos.filter((el)=>{
            return el.name.includes(filtro);
        });
        return filtrar;
    }
    // 
    const filtrarCheck = () => {
        let filtrosParaCheckear = [checkPiwen, checkNutsgo , checkSarmiento, checkAlifrut];
         let proceso = filtrosParaCheckear.forEach(element => {
            let marcas = datos.forEach(elemento => elemento.marca);
            if (element.checked == marcas){
                console.log('Funciona')
            } else ('no funciona')
        });
    };
    // Crea cada "card" de cada producto 
    function crearTarget(arr) {
        console.log(arr)
        let html;
        cajaProductos.innerHTML = "";
        // si el producto que busca no existe devuleve el h3 y su contenido.
            if (filtrarProductos(buscarProducto.value.toLowerCase()) == ""){
                cajaProductos.innerHTML = "<h3>Lo siento no hay stock. Busca otro producto.</h3>";
            }
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
    }
    
    searchBoton.addEventListener('click', (e)=>{
        e.preventDefault();
        let filtro = filtrarProductos(buscarProducto.value.toLowerCase());
        console.log(filtro);
        crearTarget(filtro); 
        
    })
    

    function filtrarProductosMarca(filtro) {
        let filtrar = datos.filter((el)=>{
            return el.marca.includes(filtro);
        });
        return filtrar;
    }

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
} 
firstAPI();


