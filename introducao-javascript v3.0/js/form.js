var botao = document.querySelector(".botao");
botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar"); // Informando que queremos extrair informações do form  
    var paciente = obtemPacienteDoForm(form); //  Extraindo dados do paciente do form
    var pacienteTr = montaTr(paciente); // Montando uma Tr com os dados extraidos
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // Introduzindo a tabela criada pelo Js dentro da tabela existente.

    form.reset();
});

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");

    pacienteTr.appendChild(nomeTd);   // esta função determina que os Td's são filhos da pacienteTr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc")); // Assim poderia simplificar o código

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}






















titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
    console.log("Me clicáro!");
}