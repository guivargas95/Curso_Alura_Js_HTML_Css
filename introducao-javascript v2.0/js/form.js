var botao = document.querySelector(".botao");
botao.addEventListener("click",function(event){
    event.preventDefault();
    
    
    console.log(form.altura.value); // Cada input em formulários possui um "name" que estamos utilizando.

    

    var pacienteTr = document.createElement("tr");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var nomeTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(nomeTd);   // esta função determina que os Td's são filhos da pacienteTr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); // Introduzindo a tabela criada pelo Js dentro da tabela existente.

    console.log(pacienteTr);


});

var form = document.querySelector("#form-adicionar");
function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
}




titulo.addEventListener("click",mostraMensagem);

function mostraMensagem(){
    console.log("Me clicáro!");
}