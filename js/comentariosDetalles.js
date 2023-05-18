import resumenValidacion from "./helper.js";

let listatrabajadores = JSON.parse(localStorage.getItem('trabajadores'));

let inputNombreUsuario = document.getElementById('inputNombreUsuario');
let TextAreaComentario = document.getElementById('TextAreaComentario');
let formularioComentario = document.querySelector('form');
const comentarios = document.getElementById("comentarios");
alert = document.getElementById('alerta');

let clasePadre1 = document.getElementById('clasePadre1');
let clasePadre2 = document.getElementById('clasePadre2');
let claseCarrusel1 = document.getElementById('claseCarrusel1');
let claseCarrusel2 = document.getElementById('claseCarrusel2');
let claseCarrusel3 = document.getElementById('claseCarrusel3');
let clasePadre3 = document.getElementById('clasePadre3');
let clasePadre5 = document.getElementById('clasePadre5');


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
// console.log(listatrabajadores.find((t)=> t.codigo == codigo));
let trabajadorEncontrado = listatrabajadores.find((t)=> t.codigo == codigo);

console.log(trabajadorEncontrado.nombre);



function cargarDatosDOM(){
    const avatar = document.createElement('img');
    avatar.src = trabajadorEncontrado.avatar;
    avatar.className = 'avatar-detalle';
    const nombre = document.createElement('h2');
    nombre.innerHTML = trabajadorEncontrado.nombre;
    nombre.className = 'nombre-banner';
    const rubro = document.createElement('h3');
    rubro.innerHTML = trabajadorEncontrado.rubro;
    rubro.className = 'fw-light';
    const ubicacion = document.createElement('h3');
    ubicacion.innerText = trabajadorEncontrado.ubicacion;
    ubicacion.className = 'fw-light';
    const descripcion = document.createElement('p');
    descripcion.innerHTML = trabajadorEncontrado.descripcion;
    descripcion.className = 'parrafo';
    const especialidad = document.createElement('ul');
    for(let indice = 0;indice<trabajadorEncontrado.especialidad.length;indice++){
        let fila = document.createElement('li');
        fila.innerHTML = trabajadorEncontrado.especialidad[indice];
        especialidad.appendChild(fila);
    }
    const precio = document.createElement('h6');
    precio.innerHTML = trabajadorEncontrado.precio;
    const galeria1 = document.createElement('img');
    galeria1.src = trabajadorEncontrado.galeria[0];
    const galeria2 = document.createElement('img');
    galeria2.src = trabajadorEncontrado.galeria[1];
    const galeria3 = document.createElement('img');
    galeria3.src = trabajadorEncontrado.galeria[2];
    
    clasePadre1.prepend(ubicacion);
    clasePadre1.prepend(rubro);
    clasePadre1.prepend(nombre);
    clasePadre1.prepend(avatar);

    clasePadre2.appendChild(descripcion);

    clasePadre3.appendChild(especialidad);

    claseCarrusel1.appendChild(galeria1);
    claseCarrusel2.appendChild(galeria2);
    claseCarrusel3.appendChild(galeria3);

    clasePadre5.appendChild(precio);


}





