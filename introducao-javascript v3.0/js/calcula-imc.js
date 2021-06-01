console.log("Fui carregado externo");


var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Shablawzinho";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; 

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent; 

    var imc = calculaImc(peso,altura);
    imc = imc;

    var PesoValido = true;
    var AlturaValida = true;

    if (peso <= 0 || peso >= 1000) {  // dizque || equivale a "or"
        console.log("Errrrrou o peso");
        PesoValido = false;
        tdPeso.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Errrrrou a altura");
        AlturaValida = false
        tdAltura.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (PesoValido && AlturaValida) {  // Dizque && equivale a "end"
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc;
    }

}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
