// event bubbling
// Evita que se extienda un evento a otros elementos

const card = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

card.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en card...');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en info...');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en titulo...');
});