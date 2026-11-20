let listaNombres = []; // Crear un arreglo vacío

let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
let boton = document.getElementById("btnAgregar");
// Sin .value para poder modificar después el input.
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

// Evento del formulario.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Ingrese un nombre");
        inputNombre.style.backgroundColor="red"

        
    } 
    else if (listaNombres.includes(nombre)){
        alert(`el nombre ${nombre} ya esta registrado`)
    }
    
    else {
        listaNombres.push(nombre);
        inputNombre.style.backgroundColor="white"
        mostrarNombres();
        inputNombre.value = "";
        inputNombre.focus();
    }
});

// Función para mostrar los nombres.
function mostrarNombres() {
    lista.innerText = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }
    

    cantidad.innerText = `Total registrados: ${listaNombres.length}`;
}
