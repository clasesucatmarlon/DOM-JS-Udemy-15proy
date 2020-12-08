'use strict';

const busqueda = document.querySelector('.busqueda');

/* busqueda.addEventListener('keydown', () => {
    console.log('escribiendo....');
});

busqueda.addEventListener('keyup', () => {
    console.log('dejando de escribir ....');
});

busqueda.addEventListener('blur', () => {
    console.log('terminando de escribir y haciendo click fuera de la caja de texto....');
});

busqueda.addEventListener('copy', () => {
    console.log('seleccionando texto para copiar y hacer ctrol+c ....');
});

busqueda.addEventListener('paste', () => {
    console.log('texto pegado....');
}); 

busqueda.addEventListener('cut', () => {
    console.log('texto cortado....');
}); */

/* busqueda.addEventListener('input', (event) => {
    console.log('Caracter presionado: ',event.data);
}); */

/* busqueda.addEventListener('input', (event) => {
    console.log('Escribiendo: ',event.target.value);
}); */

busqueda.addEventListener('input', (event) => {
    if (event.target.value === '') {
        console.log('Caja vacia....');
    }
});
