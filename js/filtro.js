const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',filtrarBusqueda);
let modalBuscar = new bootstrap.Modal(document.getElementById('modalBuscar'));

function filtrarBusqueda(e){
    modalBuscar.show();
    e.preventDefault();
}