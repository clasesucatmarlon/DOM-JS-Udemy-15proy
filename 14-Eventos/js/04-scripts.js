'use strict';

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarDatos);

function validarDatos (e) {
    e.preventDefault(); // para prevenir la acción por defecto del buscador. Prevenir que se ejecute una acción
    console.log('validando datos....');
    console.log(e);
}
