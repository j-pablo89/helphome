const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', filtrarBusqueda);
let modalBuscar = new bootstrap.Modal(document.getElementById('modalBuscar'));

function filtrarBusqueda(e) {
    modalBuscar.show();
    e.preventDefault();
}

const resultsTableBody = document.querySelector('#tablaBusqueda');


function mostrarResultados(resultados) {
    // Limpiar la tabla
    resultsTableBody.innerHTML = '';

    // Mostrar cada resultado en una fila de la tabla
    resultados.forEach(trabajador => {
        const row = document.createElement('tr');
        const nombreCell = document.createElement('td');
        const ubicacionCell = document.createElement('td');

        nombreCell.textContent = trabajador.nombre;
        ubicacionCell.textContent = trabajador.ubicacion;

        row.appendChild(nombreCell);
        row.appendChild(rubroCell);
        row.appendChild(ubicacionCell);

        resultsTableBody.appendChild(row);
    })
}

    // Obtener los valores de los filtros
    const rubro = document.getElementById('rubro').value.toLowerCase();
    const ubicacion = document.getElementById('ubicacion').value.toLowerCase();

    // Leer el archivo JSON con los datos de los trabajadores
    fetch('trabajadores.json')
        .then(response => response.json())
        .then(data => {
            // Filtrar los trabajadores según los filtros ingresados
            const resultados = data.filter(trabajador =>
                rubro.toLowerCase().includes(rubro) &&
                ubicacion.toLowerCase().includes(ubicacion)
            )
            // Mostrar los resultados en la tabla
            mostrarResultados(resultados);
        })
        .catch(error => {
            console.error('Error al leer el archivo JSON:', error);
        });
