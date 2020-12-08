'use strict';

const nav = document.querySelector('.navegacion');


// Registrar un evento
/* nav.addEventListener('click', () => {
    console.log('Clic en nav');
}); */

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a nav');
    nav.style.backgroundColor = 'red';
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de nav');
    nav.style.backgroundColor = 'transparent';
});

// mousedown - similar al click
// mouseup - al soltar el mouse
// click
// dblclick - doble click