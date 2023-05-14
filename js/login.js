import usuarios from '../db/usuarios.json' assert {type:'json'}

localStorage.setItem('usuarios', JSON.stringify(usuarios));

let usuarioLs = JSON.parse(localStorage.getItem('usuarios'));
console.log(usuarioLs)