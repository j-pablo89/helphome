import trabajadores from '../db/trabajadores.json' assert {type:'json'}

localStorage.setItem('trabajadores', JSON.stringify(trabajadores));

let listatrabajadores = JSON.parse(localStorage.getItem('trabajadores'));
console.log(listatrabajadores)


listatrabajadores.forEach(trabajador => {
    // Accede a las propiedades de cada trabajador
    const nombre = trabajador.nombre
    const rubro = trabajador.rubro;
    const ubicacion = trabajador.ubicacion;
    console.log(nombre, rubro, ubicacion)
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
    const resultadosFiltrados = listatrabajadores.filter(trabajador => {
        const cumpleRubro = filtroRubro === '' || trabajador.rubro.toLowerCase().includes(filtroRubro.toLowerCase());
        const cumpleUbicacion = filtroUbicacion === '' || trabajador.ubicacion.toLowerCase().includes(filtroUbicacion.toLowerCase());
        return cumpleRubro && cumpleUbicacion;
    });
    
    if (resultadosFiltrados.length <= 0) {
        cerrarModal();
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

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaRubro);
        fila.appendChild(celdaUbicacion);
        resultsTableBody.appendChild(fila);
    })
}

function cerrarModal() {
    const modal = document.getElementById('modalBuscar');
    modalBuscar.hide()
    Swal.fire('Seleccione un rubro!')
        return;
}