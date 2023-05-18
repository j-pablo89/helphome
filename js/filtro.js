import trabajadores from '../db/trabajadores.json' assert {type:'json'}

localStorage.setItem('trabajadores', JSON.stringify(trabajadores));

let listatrabajadores = JSON.parse(localStorage.getItem('trabajadores'));



listatrabajadores.forEach(trabajador => {
    // Accede a las propiedades de cada trabajador
    const nombre = trabajador.nombre
    const rubro = trabajador.rubro;
    const ubicacion = trabajador.ubicacion;
   
})


const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', filtrarBusqueda);
let modalBuscar = new bootstrap.Modal(document.getElementById('modalBuscar'));
const resultsTableBody = document.getElementById('tablaBusqueda');

function filtrarBusqueda(e) {
    modalBuscar.show();
    e.preventDefault();
    
    const filtroRubro = document.getElementById('inputState').value.toLowerCase();
    const filtroUbicacion = document.getElementById('inputTexto').value.toLowerCase();
    
    //limpiar Tabla
    resultsTableBody.innerHTML = '';
    
    //Filtrar resultados
    if(filtroRubro == "elige una opcion..."){
        cerrarModal('Seleccione un rubro');
    }else{
        const resultadosFiltrados = listatrabajadores.filter(trabajador => {
        
        const cumpleRubro = filtroRubro === '' || trabajador.rubro.toLowerCase().includes(filtroRubro.toLowerCase());
        const cumpleUbicacion = filtroUbicacion === '' || trabajador.ubicacion.toLowerCase().includes(filtroUbicacion.toLowerCase());
        return cumpleRubro && cumpleUbicacion;
         });
    
    if (resultadosFiltrados.length <= 0) {
        cerrarModal('No se encontraron coincidencias');
        }

        // Mostrar cada resultado en una fila de la tabla
        resultadosFiltrados.forEach(trabajador => {
        const fila = document.createElement('tr');
        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = trabajador.nombre;
        const celdaRubro = document.createElement('td');
        celdaRubro.textContent = trabajador.rubro;
        const celdaUbicacion = document.createElement('td');
        celdaUbicacion.textContent = trabajador.ubicacion;
        const botonAccion = document.createElement('a');
        botonAccion.innerHTML = 'Detalles';
        botonAccion.className = 'btn btn-info';
        botonAccion.href = 'pages/detalle.html?codigo=' + trabajador.codigo;
        botonAccion.role = 'button';
        const celdaAccion = document.createElement('td');
        celdaAccion.appendChild(botonAccion);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaRubro);
        fila.appendChild(celdaUbicacion);
        fila.appendChild(celdaAccion);
        resultsTableBody.appendChild(fila);
    })
    }
    
    
}

function cerrarModal(mensaje) {
    const modal = document.getElementById('modalBuscar');
    modalBuscar.hide()
    Swal.fire(mensaje)
        return;
}