//Algoritmo - Ingresar nombre (romi o cris) para Ingresar Cuenta
/* let userName = prompt('Ingresa tu nombre en minusculas. Para salir ingresa \' X \'.');
while (userName != 'X') {
    switch (userName) {
        case 'romina':
            for (let index = 1; index <= 3; index++) {
                password = prompt('Ingresa password' + ' ' + userName + '.' + '\nTendras solo 3 intentos\nIntento número: ' + index);

                if (password === 'password') {

                    alert(`Ingresaste a tu cuenta exitosamente ${userName}`);
                    break;

                }
            }
            break;

        case 'cris':

            for (let index = 1; index <= 3; index++) {

                password = prompt('Ingresa pswd' + ' ' + userName + '.' + '\nTendras solo 3 intentos\nIntento número: ' + index);

                if (password === 'pswd') {

                    alert(`Ingresaste a tu cuenta exitosamente ${userName}`);
                    break;
                }
            }

            break;
        default:
            alert('no te conozco');
            break;
    }
    prompt('Para salir ingresa \' X \'.');
    break;
} */

// Algoritmo - "Ingresar producto" o "Buscar producto"

/* const ingresaProducto = prompt('Ingresa en minusculas, en singular y sin tildes, un producto. Para salir, ingresa X ');
while (ingresaProducto != "X") {
    switch (ingresaProducto) {
        case 'almendra':
            alert('Ingresaste' + ' ' + ingresaProducto);
            break;
        case 'nuez':
            alert('Ingresaste' + ' ' + ingresaProducto);
            break;
        case 'chocolate':
            alert('Ingresaste' + ' ' + ingresaProducto);
            break;
        case 'leche de almendra':
            alert('Ingresaste' + ' ' + ingresaProducto);
            break;
        case 'mani':
            alert('Ingresaste' + ' ' + ingresaProducto);
            break;
        case 'mantequila de mani':
            alert('Ingresaste' + ' ' + ingresaProducto);
            break;
        case 'leche de coco':
            alert('Ingresaste' + ' ' + ingresaProducto);
            break;
        default:
            alert('Lo siento, tu producto no se encuentra disponible o no seguiste las intrucciones.\nRecuerda: Ingresa en minusculas, en singular y sin tildes, un producto.');

    }
    break;
}
 */
//Calculadora con prompt en los parámetros - testeo 

/* const calculadora = (n1, operador, n2) => {
    n1 = parseInt(prompt('Para calcular ingresa un numero'));
    operador = prompt('Ingresa un operador, como + - / * ');
    n2 = parseInt(prompt('Ingresar OTRO numero'));
    switch (operador) {
        case "+":
            alert("Tu resultado es" + " " + (n1 + n2));
            break;
        case "-":
            alert("Tu resultado es" + " " + (n1 - n2));
            break;
        case "*":
            alert("Tu resultado es" + " " + (n1 * n2));
            break;
        case "/":
            switch (n2) {
                case 0:
                    alert('No se puede dividir por cero.');
                    break;
                default:
                    alert("Tu resultado es" + " " + (n1 / n2));
                    break;
            }
            break;
        default:
            alert("Error de sintaxis. Intenta otra vez y lee bien las instrucciones");
            break;
    }
}
calculadora(); */


//---------------> Segunda pre entrega <----------------

//Funcion Constructora
const productList = [];
function AddProductList(name, marca, precio, descripcion) {
    this.id = `LB${productList.length + 1}`;
    this.name = name;
    this.marca = marca;
    this.precio = precio;
    this.descripcion = descripcion;
    //método
    this.precioCienGramos = (cantidad)=> {
        return (this.precio * cantidad) / 100;
        //Si es un liquido el calculo es de 100 mililitros
    };
}
// se agregarán mis productos a productList
productList.push(new AddProductList('pasas de uvas', 'NutsGo', 94, 'Pasas de uvas con bolsa reciclable'));
productList.push(new AddProductList('avena', 'NutsGo', 130));
productList.push(new AddProductList('nuez', 'Piwen.cl', 180,));
productList.push(new AddProductList('almendra', 'Piwen.cl', 190, 'Almendras con bolsa reciclable'));
productList.push(new AddProductList('leche de coco', 'NutsGo', 230, 'Caja de leche de Coco varian de 150ml, 250ml, 500ml y 1 Litro'));
productList.push(new AddProductList('leche de almendras', 'NutsGo', 280, 'Caja de leche de Almendras varian de 150ml, 250ml, 500ml y 1 Litro'));
productList.push(new AddProductList('mani', 'NutsGo', 150, 'Mani pelado'));
productList.push(new AddProductList('mix tropical', 'Piwen.cl', 200, 'Frutos secos incluidos: \'almendras\', \'nueces\', \'pasas de uvas\' y \'mani\'.'));
productList.push(new AddProductList('harina de almendras', 'NutsGo', 190, 'Harina de almendras pelados'));
productList.push(new AddProductList('coco en lata', 'NutsGo', 160, 'Leche de coco en lata listo para el consumo'));

console.log(productList);

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

