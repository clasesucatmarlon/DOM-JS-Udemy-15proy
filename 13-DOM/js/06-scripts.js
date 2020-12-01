// Accdeder y modificar texto e imágenes

const encabezado = document.querySelector('.contenido-hero h1');
// console.log(encabezado)

/* console.log(encabezado.textContent);
console.log(encabezado.innerHTML); */

// seleccionar por encadenamiento
const encabezado2 = document.querySelector('.contenido-hero h1').innerHTML;
console.log(encabezado2);


// Cambiar contenido de .contenido-hero h1
document.querySelector('.contenido-hero h1').textContent = 'Nuevo título';


// Cambiar imagen

const imagen = document.querySelector('.card');
imagen.src = 'img/hacer3.jpg'