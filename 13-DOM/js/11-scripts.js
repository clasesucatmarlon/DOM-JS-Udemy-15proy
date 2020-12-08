'use strict';

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// registrar evento en el botón
/* btnFlotante.addEventListener('click', () => {
    console.log('click en el botón')
}); */

// Registrar el evento con una función
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if ( footer.classList.contains('activo'))  { // Verificar si footer tiene la clase de activo
        footer.classList.remove('activo');
        //btnFlotante.classList.remove('activo');
        // usar this para hacer referencia a lo que mandó a llamar esa función (btnFlotante)
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        //btnFlotante.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar';  // Cambiar texto del botón
    }
}