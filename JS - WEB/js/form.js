let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    let form = document.querySelector("#form-adiciona");

    // Extraindo info do paciente no formulário
    let paciente = obtemPacienteFormulario(form);
    
    //Cria Tr e Td do paciente
    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);   

    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagemDeErro");
        mensagemErro.textContent = erros;
        return;
    }

    //Adicionando o paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});

function obtemPacienteFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
} 

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd (paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd (paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd (paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd (paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    let erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }
    return erros;
}