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
        const cursoSeleccionado = e.target.parentElement.parentElement
        //console.log('Agregando al carrito...', cursoSeleccionado);
        leerDatosCurso(cursoSeleccionado);

    }
}

// Leer información del HTML al que se quiere agregar al carrito
function leerDatosCurso(cursoSeleccionado) {
    console.log('Seleccionaste: ', cursoSeleccionado);
    // Crear objeto con el contenido del curso actual
    const infoCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'), 
        cantidad: 1
    }
    console.log(infoCurso);

}