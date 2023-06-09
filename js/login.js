import usuarios from '../db/usuarios.json' assert {type:'json'}

localStorage.setItem('usuarios', JSON.stringify(usuarios));

let usuarioLs = JSON.parse(localStorage.getItem('usuarios'));

const loginForm=document.querySelector(`#loginForm`)
loginForm.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    const email=document.querySelector(`#email`).value
    const password=document.querySelector(`#password`).value
    const validUsers = usuarioLs.find(user => user.email===email && user.password===password);
    
    if(!validUsers){
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o contraseña incorrectos!'
        })
    }
    localStorage.setItem('sesion', JSON.stringify(validUsers));
    
    alert(`Bienvenido ${validUsers.tipo}`)
    window.location.href=`../index.html`

})