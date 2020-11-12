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
        exibeMensagemErro(erros);
        return;
    }

    //Adicionando o paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
    form.reset();
    
    let mensagemErro = document.querySelector("#mensagemErro");
    mensagemErro.innerHTML = "";
});

function exibeMensagemErro(erros) {
    let ul = document.querySelector("#mensagemErro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em branco");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco");
    }

    return erros;
}