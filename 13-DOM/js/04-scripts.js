// Usar querySelector


// Retorna el primero que encuentre
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores como en CSS
const info = document.querySelector('.premium .info');
console.log(info);


// Seleccionar segundo card de hospedaje
const segCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segCard);

// Seleccionar po id con querySelector
const form = document.querySelector('#formulario');
console.log(form);