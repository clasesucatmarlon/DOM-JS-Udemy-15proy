'use strict';

// Eliminar elementos
const primerEnlace = document.querySelector('a');
// primerEnlace.remove();


// Eliminar desde el padre
const eliminarDesdePadre = document.querySelector('.navegacion');
console.log(eliminarDesdePadre.children);
eliminarDesdePadre.removeChild(eliminarDesdePadre.children[2]);