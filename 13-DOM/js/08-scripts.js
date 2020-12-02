// Traversting del DOM - recorrer el DOM

/* const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.children[1]); */

const card = document.querySelector('.card');

// *******************************************
// De padre a hijo
// *******************************************

// Cambiar contenido
console.log(card.children[1].children[1].textContent);
card.children[1].children[1].textContent = 'Nuevo contenido'

// Cambiar imagen
card.children[0].src = './img/hacer4.jpg'
console.log(card.children[0]);

// *******************************************
// De hijo a padre
// *******************************************
console.log(card.parentElement);

// *******************************************
// Seleccionar elemento hermano
// *******************************************
console.log(card.nextElementSibling);

// *******************************************
// Seleccionar elemento hermano anterior
// *******************************************
const card2 = document.querySelector('.card:nth-child(4)');
console.log(card2.previousElementSibling);
