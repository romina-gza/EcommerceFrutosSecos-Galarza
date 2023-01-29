const cerrarCarrito = document.getElementById('btn-cerrar-carrito'),
    sectionCarrito = document.getElementById('section-carrito'),
    boxCarrito = document.getElementById('box-carrito'),
    carritoContent = document.getElementById('carrito-content'),
    btnVaciarCarrito = document.getElementById('btn-vaciar-carrito'),
    btnAbrirCarrito = document.getElementById('abrir-carrito');

btnAbrirCarrito.addEventListener('click', ()=>{
    sectionCarrito.classList.add('active');
    boxCarrito.classList.add('active');
})

cerrarCarrito.addEventListener('click', ()=>{
    sectionCarrito.classList.remove('active');
    boxCarrito.classList.remove('active');
})

