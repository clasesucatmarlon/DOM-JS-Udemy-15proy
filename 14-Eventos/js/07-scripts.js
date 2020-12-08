// event bubbling
// Otra manera de evitar  que se extienda un evento a otros elementos


const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    //console.log(e.target.classList);
    if (e.target.classList.contains('titulo')) {
        console.log('Hiciste click en el título....');
    } else if (e.target.classList.contains('info')) {
        console.log('Hiciste click en info....');
    }
    else if (e.target.classList.contains('precio')) {
        console.log('Hiciste click en precio....');
    }
});