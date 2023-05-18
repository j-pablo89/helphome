import resumenValidacion from "./helper.js";

let listatrabajadores = JSON.parse(localStorage.getItem('trabajadores'));

let inputNombreUsuario = document.getElementById('inputNombreUsuario');
let TextAreaComentario = document.getElementById('TextAreaComentario');
let formularioComentario = document.querySelector('form');
const comentarios = document.getElementById("comentarios");
alert = document.getElementById('alerta');

formularioComentario.addEventListener('submit', prepararComentario);

function prepararComentario(e){
    e.preventDefault();
    crearComentario()
}


function crearComentario(){
    const usuario = inputNombreUsuario.value.trim();
    const comentario = TextAreaComentario.value.trim();

    const resumen = resumenValidacion(usuario, comentario);

    mostrarMensajeError(resumen);

    if(resumen.length === 0){
        const listItem = document.createElement("li"); // Crear un nuevo elemento li
        listItem.className = "list-group-item mt-2 animate__animated animate__lightSpeedInLeft text-secondary p-3 my-2 rounded comentario"; // Agregar clases de Bootstrap
        listItem.innerHTML = `<h5><strong>${usuario}:</strong><br> ${profanityCleaner.clean(comentario, { placeholder: '*' })}</h5> <span class="text-secondary">${obtenerFechaHora()}</span>`;
        comentarios.appendChild(listItem); // Agregar el elemento li a la lista
        limpiarFormulario();
    }
}

function mostrarMensajeError(resumen){
    if(resumen.length > 0){
        alert.className = "alert  alert-danger mt-3";
        alert.innerHTML = resumen;
    }else{
        alert.className = "alert  alert-danger mt-3 d-none";
    }
}

function limpiarFormulario(){
    formularioComentario.reset();
}

function obtenerFechaHora() {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours(),
        minutosActuales = fechaActual.getMinutes(),
        segundosActuales = fechaActual.getSeconds();

    if (segundosActuales < 10) {
        segundosActuales = '0' + segundosActuales;
    }
    if (minutosActuales < 10) {
        minutosActuales = '0' + minutosActuales;
    }
    if (horaActual < 10) {
        horaActual = '0' + horaActual;
    }
    
    return `${horaActual}:${minutosActuales}:${segundosActuales} - ${fechaActual.getDate()}/${fechaActual.getMonth()+1}/${fechaActual.getFullYear()}`;
}

let params = new URLSearchParams(document.location.search);
let codigo = params.get("codigo"); // is the string "Jonathan"
console.log(listatrabajadores.find((t)=> t.codigo == codigo));


