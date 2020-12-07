'use strict';

// Insertar HTML con Javascript
const enlace = document.createElement('A');

// Agregando texto
enlace.textContent = 'Nuevo enlace';

// Agregando href
enlace.href = '/nuevo-enlace';

// Agregando target
enlace.target = '_blank';

// Agregando clase
enlace.classList.add('alguna-clase');

// Agregando acción
enlace.onclick = functionClick;

// Seleccionar lugar: en el ejemplo en navegación
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);  // Insertar al final
navegacion.insertBefore(enlace, navegacion.children[1]); // Insertar en ludar deseado

function functionClick () {
    alert('Hiciste clic en el nuevo enlace');
}


// ***********************************************************************************
// Crear un card de forma dinámica
// ***********************************************************************************

// Crear párrafo
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto'; // Asignar categoría
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Música del 2020'
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$500 por persona';
parrafo3.classList.add('precio');
console.log(parrafo3);

// crear div con la clase info, que contiene a los párrafos
const divInfo = document.createElement('div');
divInfo.classList.add('info');
console.log(divInfo);

// Agregar los hijos al div
divInfo.appendChild(parrafo1);
divInfo.appendChild(parrafo2);
divInfo.appendChild(parrafo3);

// Crear una imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer1.png';
console.log(imagen);
imagen.alt = 'Texto alternativo';

// Div padre contenedor de la información
const padre = document.createElement('div');
padre.classList.add('card');

// Asignar imagen e información
padre.appendChild(imagen);
padre.appendChild(divInfo);
console.log(padre);

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(padre); // Insertarlo al final
contenedor.insertBefore(padre, contenedor.children[1]); // Insertarlo en otro lugar
