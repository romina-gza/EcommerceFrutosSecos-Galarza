/* const cerrarCarrito = document.getElementById('btn-cerrar-carrito'),
    sectionCarrito = document.getElementById('section-carrito'),
    boxCarrito = document.getElementById('box-carrito'),
    carritoContent = document.getElementById('carrito-content'),
    btnVaciarCarrito = document.getElementById('btn-vaciar-carrito'),
    btnAbrirCarrito = document.getElementById('abrir-carrito'),
    // queryall
    btnLess = document.getElementsByClassName('less'), 
    inputNum = document.getElementsByClassName('num'), 
    btnAdd = document.getElementsByClassName('add'),

    inputCantProd = document.getElementById('cantidadProd');

const agregarAcarrito = document.getElementsByClassName('boton'); 

btnAbrirCarrito.addEventListener('click', ()=>{
    sectionCarrito.classList.add('active');
    boxCarrito.classList.add('active');
})

cerrarCarrito.addEventListener('click', ()=>{
    sectionCarrito.classList.remove('active');
    boxCarrito.classList.remove('active');
})

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
//FETCH

    function filtrarProductosID(filtro) {
        let filtrar = datos.filter((el)=>{
            return el.id.includes(filtro);
        });
        return filtrar;
    }

    function guardarEnArr(arr){
        productAdded.push(arr);
    }
 */
      /* Caracteristica: cuando se haga click *se buscará el id del boton que se clickeo, **se filtrara en todos los productos
el id y ***luego se guardara en un array. ****Por ultimo se creara un pequeño contenedor html en el carrito con el array donde se guardan todos los productos que fueron clickeados */
/*     for(let i=0; i < agregarAcarrito.length; i++) {
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

    // botones de crearTarget de productos.
let testeo23 = () => {for(let i=0; i < btnLess.length; i++) {
    btnLess[i].addEventListener('click', ()=>{
        if (inputNum[i].value > 1){
            inputNum[i].value = parseInt(inputNum[i].value) - 1;
        }
    })
} 
}
testeo23()
let testeo24 = () => {for(let i=0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener('click', ()=>{
        inputNum[i].value = parseInt(inputNum[i].value)+1;
    })
}}
testeo24()
 */
/* function filtrarProductosID(filtro) {
    let filtrar = productList.filter((el)=>{
        return el.id.includes(filtro);
    });
    return filtrar;
} */



  /* Caracteristica: cuando se haga click *se buscará el id del boton que se clickeo, **se filtrara en todos los productos
el id y ***luego se guardara en un array. ****Por ultimo se creara un pequeño contenedor html en el carrito con el array donde se guardan todos los productos que fueron clickeados */
/* for(let i=0; i < agregarAcarrito.length; i++) {
    agregarAcarrito[i].addEventListener("click", function() 
    {
        let resp = this.id; // *
        console.log(resp)
        filtrarProductosID(this.id); // **
        guardarEnArr(filtrarProductosID(this.id)) // *** 
        crearMiniTarget(productAdded) // ****
        console.log(filtrarProductosID(this.id))
    }); 
}   */

// botones de crearTarget de productos.

/* btnAdd.addEventListener('click', ()=>{
    inputNum.value = parseInt(inputNum.value)+1;
})

*/
