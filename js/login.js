import usuarios from '../db/usuarios.json' assert {type:'json'}

localStorage.setItem('usuarios', JSON.stringify(usuarios));

let usuarioLs = JSON.parse(localStorage.getItem('usuarios'));
console.log(usuarioLs)

const loginForm=document.querySelector(`#loginForm`)
loginForm.addEventListener(`submit`, (e)=>{
    e.preventDefault()
    const email=document.querySelector(`#email`).value
    const password=document.querySelector(`#password`).value

    const Users=JSON.parse(localStorage.getItem(`usuarios`)) || []
    const validUsers = Users.find(user => user.email===email && user.password===password)
    if(!validUsers){
        return alert(`Usuario y/o contraseña incorrectos`)
    }
    alert(`Bienvenido ${validUsers.name}`)
    window.location.href=`index.html`


})