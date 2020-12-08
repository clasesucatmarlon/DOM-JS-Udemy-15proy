'use strict';

/* window.addEventListener('scroll', () => {
    console.log('Haciendo scroll');
}); */


// Determinar la candidad de pixels del scroll
/* window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    console.log(scrollPX);

    if (scrollPX === 200) {
        alert('scroll llegó a 200 px')
    }
}); */

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();  // Indicar el lugar en dónde se encuentra elemento
    //console.log(ubicacion);

    if (ubicacion.top < 345) {
        console.log('Elemento totalmente visible');
    } else {
        console.log('Elemento aún no está totalmente visible');
    }



});