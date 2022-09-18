function prepararMensaje(mensaje) {
    return mensaje.replace(/[^\w\s]/gi, '').replace(/[0-9]/gi, '').toLowerCase();
}

function encriptar() {
    const mensaje = prepararMensaje(document.getElementById('texto').value);
    var encriptado = mensaje.replace(/e/gi, 'enter');
    encriptado = encriptado.replace(/i/gi, 'imes');
    encriptado = encriptado.replace(/a/gi, 'ai');
    encriptado = encriptado.replace(/o/gi, 'ober');
    encriptado = encriptado.replace(/u/gi, 'ufat');

    document.getElementById('mensaje').value = encriptado;
}

function desencriptar() {
    const mensaje = prepararMensaje(document.getElementById('texto').value);
    var desencriptado = mensaje.replace(/imes/gi, 'i');
    desencriptado = desencriptado.replace(/enter/gi, 'e');
    desencriptado = desencriptado.replace(/ai/gi, 'a');
    desencriptado = desencriptado.replace(/ober/gi, 'o');
    desencriptado = desencriptado.replace(/ufat/gi, 'u');

    document.getElementById('mensaje').value = desencriptado;
    
}

function copiarTexto() {
var textoCopiado = document.getElementById("mensaje");
textoCopiado.select(); 
textoCopiado.setSelectionRange(0, 99999);
navigator.clipboard.writeText(textoCopiado.value);

}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-encriptar').addEventListener('click', encriptar);
    document.getElementById('btn-desencriptar').addEventListener('click', desencriptar);
    document.getElementById('btn-copiar').addEventListener('click', copiarTexto);
  });