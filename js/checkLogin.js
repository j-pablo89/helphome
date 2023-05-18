let sesionActual = JSON.parse(localStorage.getItem('sesion'));
if(sesionActual){
    let login = document.getElementById('login');
    login.remove();

}else{
    let logout = document.getElementById('logout');
    logout.className = 'd-none';
}

let salirSesion = document.getElementById('logout');
salirSesion.addEventListener('click', () => cerrarSesion());

function cerrarSesion(){
    localStorage.removeItem('sesion');
}