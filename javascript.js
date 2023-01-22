function Encriptar() {
   
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm, "enter");
    var txtcifrado = txtcifrado.replace(/o/igm, "ober");
    var txtcifrado = txtcifrado.replace(/i/igm, "ines");
    var txtcifrado = txtcifrado.replace(/a/igm, "ai");
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat");
    document.getElementById("imgder").style.display =  "none";
    document.getElementById("texto1").style.display =  "none";
    document.getElementById("cajatexto").innerHTML = txtcifrado;
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inherit";
}

function Desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm, "e");
    var txtcifrado = txtcifrado.replace(/ober/igm, "o");
    var txtcifrado = txtcifrado.replace(/ines/igm, "i");
    var txtcifrado = txtcifrado.replace(/ai/igm, "a");
    var txtcifrado = txtcifrado.replace(/ufat/igm, "u");
    document.getElementById("imgder").style.display = "none";
    document.getElementById("texto1").style.display =  "none";
    document.getElementById("cajatexto").innerHTML = txtcifrado;
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#cajatexto");
    contenido.select()
    document.execCommand("copy");
    alert("se copio");
}