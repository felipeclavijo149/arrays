// Buscador de estudiantes
let estudiantes = ["Ana", "Luis", "Carlos", "María", "Sofía", "Pedro"];

let lista = document.getElementById("lista");
let formulario = document.getElementById("formulario");
let buscar = document.getElementById("buscar");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", buscarEstudiante);

mostrar();

function mostrar(){
    lista.innerText = "";

    for (let i = 0; i < estudiantes.length; i++) {
        lista.innerHTML += `<li>${estudiantes[i]}</li>`
    }
}

function buscarEstudiante(){
    event.preventDefault();

    let nombreBuscado = buscar.value;
    let encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i] == nombreBuscado) {
            encontrado = true;
        }
    }

    if (encontrado == true) {
        resultado.innerText = `El estudiante ${nombreBuscado} está registrado`;
    } else {
        resultado.innerText = `El estudiante ${nombreBuscado} no está registrado`;
    }
}
