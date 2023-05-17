function validarUsername(usuario){
    const regexUsername = /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){2,30}[a-zA-Z0-9]$/;
    return regexUsername.test(usuario);
}

function validarEtiquetasHTML(texto){
    const regexEtiquetalHTML = /<\/?[a-z][\s\S]*>/i;
    return !regexEtiquetalHTML.test(texto);
}

function validarCantidadCaracteres(texto, min, max){
    return (texto.length >= min && texto.length <= max);
}

export default function resumenValidacion(nombreUsuario, comentario){
    let resumen = '';
    if(!validarCantidadCaracteres(nombreUsuario, 2, 30)){
        resumen += 'El <strong>nombre de usuario</strong> debe contener entre 2 y 30 caracteres.<br>';
    }
    if(!validarCantidadCaracteres(comentario, 5, 300)){
        resumen += 'Los <strong>comentarios</strong> deben contener entre 5 y 300 caracteres.<br>';
    }
    if(!validarUsername(nombreUsuario)){
        resumen += 'El <strong>nombre de usuario</strong> solo puede contener caracteres alfanuméricos y puntos(.) o barras (/). <br>'
    }
    if(!validarEtiquetasHTML(nombreUsuario)){
        resumen += 'El <strong>nombre de usuario</strong> no puede contener etiquetas html.<br>'
    }
    if(!validarEtiquetasHTML(comentario)){
        resumen += 'Los <strong>comentarios</strong> no pueden contener etiquetas html.<br>'
    }
    return resumen;
}