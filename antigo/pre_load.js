const pre_load = document.getElementById("pre_load");
const pontos = document.querySelectorAll("#pre_load .content_linha .ponto");
var numero = 0

var interval1 = setInterval(() => {
    pontos[numero].style.animationName = "preLoadLinhaPonto";
    numero ++;
    if (numero >= 4) {
        clearInterval(interval1)
    }
}, 250);

const carregando = document.querySelectorAll("#pre_load h3");
const carregandoSpan = document.querySelector("#pre_load h3 span");

setInterval(() => {
    if (carregandoSpan.innerHTML == "...") {
        carregandoSpan.innerHTML = "";
    } else if (carregandoSpan.innerHTML == "..") {
        carregandoSpan.innerHTML = "...";
    } else if (carregandoSpan.innerHTML == ".") {
        carregandoSpan.innerHTML = "..";
    } else if (carregandoSpan.innerHTML == "") {
        carregandoSpan.innerHTML = ".";
    }
}, 750);

window.addEventListener("load", function() {
    const tela = document.getElementById('tela');
    pre_load.style.display = "none";
    tela.style.display = "block";
});
