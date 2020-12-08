// VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


// REGISTRAR TODOS LOS EVENTOS LISTENER
cargarEventListener();
function cargarEventListener() {
    listaCursos.addEventListener('click', agregarCurso); // Se dispara al hacer clic en el botón agregar al carrito

}

// FUNCIONES
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Agregando al carrito...');
        console.log(e.target)
    }
}