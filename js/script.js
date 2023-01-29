const buscarProducto = document.querySelector('#search-input'),
    searchBoton = document.querySelector('#search'),
    cajaProductos = document.querySelector('.box-productos'),
    // variables de filtros - checks - precio
    checkPiwen = document.getElementById('piwen'),
    checkNutsgo = document.getElementById('nuttsGo'),
    checkSarmiento = document.getElementById('sarmiento'),
    checkAlifrut = document.getElementById('alifrut'),
    btnSinFiltros = document.getElementById('btn-sin-filtros')
    precioDesde = document.getElementById('precio-desde'),
    precioHasta = document.getElementById('precio-hasta')
    // boton para mostrar todos los productos 
    btnShowAll = document.getElementById('btn-show-all');

const boxChecks = document.querySelectorAll('input[type="radio"]'); 

//Funcion Constructora pre entregas pasadas ¡IGNORAR!
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
    console.log(datos);
    const marcaAll = datos.marca;
    console.log(marcaAll)
    console.log(datos[0].marca)
    crearTarget(datos)


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
                if (mostrar == "") {cajaProductos.innerHTML = "<h3>Lo sentimos, no hay stock de esta marca.</h3>"};
            } 
        })           
        
    })

    function filtrarProductosID(filtro) {
        let filtrar = datos.filter((el)=>{
            return el.id.includes(filtro);
        });
        return filtrar;
    }


    // crearTarget Crea cada "card" de cada producto 
    // ------------>
    function crearTarget(arr) {
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

    function unselect(){
        boxChecks.forEach((radioCheck) => radioCheck.checked = false);
    }

    /* Caracteristica: Cuando haga click en el boton se eliminaran todos los filtros del lado izquierdo de la pantalla */
    btnSinFiltros.addEventListener('click', ()=>{
        unselect();
        crearTarget(datos);
    })

} 

firstAPI();


