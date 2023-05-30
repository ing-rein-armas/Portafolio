function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    txtCifrado = txtCifrado.replace(/o/igm,"over");
    txtCifrado = txtCifrado.replace(/i/igm,"imes");
    txtCifrado = txtCifrado.replace(/a/igm,"ai");
    txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagenDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    txtCifrado = txtCifrado.replace(/over/igm,"o");
    txtCifrado = txtCifrado.replace(/imes/igm,"i");
    txtCifrado = txtCifrado.replace(/ai/igm,"a");
    txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió el texto");
}
