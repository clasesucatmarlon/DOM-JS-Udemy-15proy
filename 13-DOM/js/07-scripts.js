// Cambiar css con js

/* const encabezado = document.querySelector('h1');

encabezado.style.color = 'blue';
encabezado.style.fontSize = '50px';
encabezado.style.textAlign = 'center';
encabezado.style.textTransform = 'upperCase'; */


const card = document.querySelector('.card');
card.classList.add('nueva-clase')
card.classList.remove('nueva-clase')
console.log(card.classList);