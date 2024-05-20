const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");
const dez = document.getElementById("dez");
const tempo = document.getElementById("tempo");
const iniciar = document.getElementById("iniciar");

iniciar.addEventListener("click", () => {
    document.getElementById("instrucoes").style.display = "none";
    Timer();
});

um.addEventListener("click", () => {
    um.style.display = "none";
});

dois.addEventListener("click", () => {
    if (um.style.display == "none") {
        dois.style.display = "none";
    }
});

tres.addEventListener("click", () => {
    if (dois.style.display == "none") {
        tres.style.display = "none";
    }
});

quatro.addEventListener("click", () => {
    if (tres.style.display == "none") {
        quatro.style.display = "none";
    }
});

cinco.addEventListener("click", () => {
    if (quatro.style.display == "none") {
        cinco.style.display = "none";
    }
});

seis.addEventListener("click", () => {
    if (cinco.style.display == "none") {
        seis.style.display = "none";
    }
});

sete.addEventListener("click", () => {
    if (seis.style.display == "none") {
        sete.style.display = "none";
    }
});

oito.addEventListener("click", () => {
    if (sete.style.display == "none") {
        oito.style.display = "none";
    }
});

nove.addEventListener("click", () => {
    if (oito.style.display == "none") {
        nove.style.display = "none";
    }
});

dez.addEventListener("click", () => {
    if (nove.style.display == "none") {
        dez.style.display = "none";
    }
});

function Timer() {
    var counter = 1;
    var myTimer = setInterval(function () {
        document.getElementById("tempo").textContent = "Tempo: " + counter/100 + "s";
        counter++;
        if (dez.style.display == "none") {
            clearInterval(myTimer)
            document.getElementById("tempo").style.color = "green"
            document.getElementById("tempo").style.fontSize = "35px"
            document.getElementById("tempo").style.paddingLeft = "90px"
            document.getElementById("tempo").style.paddingTop = "150px"
        }
    }, 10);
}

