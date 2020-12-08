// VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


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
    // Crear objeto con el contenido del curso actual
    const infoCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'), 
        cantidad: 1
    }
    // Agregar elementos al arreglo de articulos
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}

// Mostrar el carrito de compras en el HTML
function carritoHTML() {
    // Limpiar el HTML
    limpiarHtml();
    // Recorre el carrito y genera el HTML
    articulosCarrito.map(carrito => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <img src='${carrito.imagen}'></img>
        <td>${carrito.titulo}</td>
        <td>${carrito.precio}</td>
        <td>${carrito.cantidad}</td>
        `;
        // agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// Elimina lo cursos del tbody
function limpiarHtml () {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    // Forma correcta (es más rápida)
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
