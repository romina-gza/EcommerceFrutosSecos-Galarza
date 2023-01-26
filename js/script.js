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

//LO QUE HACE: Pide un producto y la cantidad de gramos. Luego devuelve el precio real en gramos del producto. Al final, todos los productos buscados se agregan a "aqui[]"
let buscar1 = prompt('Ingresa el producto que quieras buscar. Para salir ingresa \'salir\'');
let gramos = parseInt(prompt('Ingresa en números la cantidad de gramos o mililitros que desees. Para salir puedes presionar \'enter\''));
let aqui = [];
let orden = [];
while (buscar1.toLowerCase() != "salir") {

        for (const producto of productList) {
            if (buscar1.toLowerCase() == producto.name){
                let devolver = `${producto.name} $ ${producto.precioCienGramos(gramos)} es el costo de ${gramos} gramos`;   
                alert(devolver);

                let pedido = {'producto': producto.name, 
                            'cantidad': gramos,
                            'costo': producto.precioCienGramos(gramos)};
                orden.unshift(pedido);
                
                let obtIndex = productList.indexOf(producto);
                let devIndex = productList[obtIndex];
                aqui.push(devIndex);
            } 
        }
    
    buscar1 = prompt('Ingresa otro producto. Para salir ingresa salir');
    gramos = parseInt(prompt('Ingresa la cantidad de gramos que desees. Para salir puedes presionar \'enter\''));
}
// Los CONSOLE.LOG siguientes son para poder verlos en la consola a la hora de testear.
console.log(aqui);
console.log(orden);

//find - Busca en tu lista de compras ese producto que crees que olvidaste. si NO está te pide buscar otra vez.
let clave1 = prompt('Buscar producto en tu lista. Para salir ingresa salir.');
while (clave1.toLowerCase() != "salir") {
const encuentra = orden.find( encontrar =>{
    if (encontrar.producto === clave1.toLowerCase()){
        let mapa = `${encontrar.producto} se encuentra dentro de tu lista de agregados al carrito.`;
            alert(mapa);
    } 
}
    
) 
    clave1 = prompt('Buscar otro producto en tu lista. Para salir ingresa salir.');
}
// filter - prepárate para un producto por alert :)
let claveS = parseInt(prompt('Nuestros precios son por cada 100gramos. Buscar un numero mayor que...'));
let claveS1 = parseInt(prompt('pero menor que...'));
const encuentraFilter = productList.filter(elemento =>{
    if (elemento.precio >= claveS && elemento.precio <= claveS1) {
        alert('$' + elemento.precio + ' los 100 gramos/mililitros de ' + elemento.name);
    }
    
    }
) 

