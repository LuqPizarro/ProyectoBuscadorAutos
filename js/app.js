// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max -10;


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    // Insertar los años
    mostrarYear();
});


// Funciones
function mostrarAutos() {
    autos.forEach( auto => {

        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio: ${precio} - color ${color}
        `
        

        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

function mostrarYear(){

    for( let i = max; i >= min; i--){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
    }
}