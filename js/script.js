
const buscarProducto = document.querySelector('#search-input'),
    searchBoton = document.querySelector('#search'),
    cajaProductos = document.querySelector('.box-productos'),
    // variables de filtros - chacks -precio
    checkPiwen = document.querySelector('#checked-piwen-cl'),
    checkNuttsgo = document.querySelector('#checked-piwen-cl')
    ;
    


//Funcion Constructora
const productList = []; // Lista de productos.
function AddProductList(name, marca, precio, gramos, descripcion, img) {
    this.id = `LB${productList.length + 1}`;
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

// se agregarán mis productos a productList
productList.push(new AddProductList('pasas de uvas', 'Piwen.cl', 94, 250, 'Pasas de uvas con bolsa reciclable','pasas-de-uvas.jpg'));
productList.push(new AddProductList('avena', 'Piwen.cl', 130, 400,'Avena integral' ,'avena.jpg'));
productList.push(new AddProductList('nuez', 'Piwen.cl', 180, 100, 'Nuez sin pelar' ,'nuez.jpg'));
productList.push(new AddProductList('almendra', 'Piwen.cl', 390, 250, 'Almendras con bolsa reciclable','almendras-piwen.jpg'));
productList.push(new AddProductList('leche de coco', 'NutsGo', 230, 500, 'Caja de leche de Coco varian de 150ml, 250ml, 500ml y 1 Litro','leche-de-coco.jpg'));
productList.push(new AddProductList('leche de almendras', 'NutsGo', 280, 500, 'Caja de leche de Almendras','leche-de-almendras.jpg'));
productList.push(new AddProductList('mani', 'NutsGo', 1250, 350, 'Mani en mantequilla','crema-de-cacahuete.jpg'));
productList.push(new AddProductList('mix tropical', 'Piwen.cl', 200, 250, 'Frutos secos incluidos: \'almendras\', \'nueces\', \'pasas de uvas\' y \'mani\'.','mix-tropical.jpg'));
productList.push(new AddProductList('harina de almendras', 'NutsGo', 190, 250, 'Harina de almendras pelados','harina-de-almendras.jpg'));
productList.push(new AddProductList('coco en lata', 'NutsGo', 360, 250, 'Leche de coco en lata listo para el consumo','coco-en-lata.jpg'));

console.log(productList);


function filtrarProductos(filtro) {
    let filtrar = productList.filter((el)=>{
        return el.name.includes(filtro);
    });
    return filtrar;
}

// Crea cada "card" de cada producto 
function crearTarget(arr) {
    let html;
    cajaProductos.innerHTML = "";
    // si el producto que busca no existe devuleve el h3 y su contenido.
        if (filtrarProductos(buscarProducto.value.toLowerCase()) == ""){
            cajaProductos.innerHTML = "<h3>Lo siento no hay stock. Busca otro producto.</h3>";
        }
    for (const producto of arr) {
        html = 
        `<div class="container">
            <div class="img-card">
                <img src="./assets/img-productos/${producto.img}">
            </div>
                <div class="texto">
                    <p class="name-card">${producto.name} - ${producto.marca}</p>
                    <p>${producto.gramos}gr/mililitros</p>
                    <span class="precio"><strong>$ ${producto.precio}</strong></span>
                    <div>
                        <input type="number" name="cantidad" id="cantidad" placeholder="Cantidad...">
                        <button class="boton" id="${producto.id}" value="Comprar"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
        </div>`;
        cajaProductos.innerHTML += html;
        
    }
}
crearTarget(productList);

searchBoton.addEventListener('click', (e)=>{
    e.preventDefault();
    let filtro = filtrarProductos(buscarProducto.value.toLowerCase());
    
    console.log(filtro);
    crearTarget(filtro);
    
})
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


