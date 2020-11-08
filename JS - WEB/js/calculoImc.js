let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i ++ ){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;
    
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    
    let tdImc = paciente.querySelector(".info-imc");
    
    let pesoValido = true;
    let alturaValido = true;
    
    if(peso <= 0 || peso >= 800){
        console.log("Peso inválido.");
        tdImc.textContent = "Peso inválido."; 
        pesoValido = false;
        paciente.classList.add("pacienteInvalido");
    }
    
    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida.");
        tdImc.textContent = "Altura inválida.";
        alturaValido = false;
        paciente.classList.add("pacienteInvalido");
    }
    
    if(alturaValido && pesoValido){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!";
        paciente.classList.add("pacienteInvalido");
    }
}

/*Exemplo 2 - função anonima
titulo.addEventListener("click", function(){
    console.log("Oi");
});*/

/*Exemplo 1 - função nomeada
function mostraMensagem(){
    console.log("Clique");
}*/

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}