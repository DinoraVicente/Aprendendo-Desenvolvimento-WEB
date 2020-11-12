let campoFiltro = document.querySelector("#filtrarTabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value,"i"); //"i" não haja distinção entre letras maiúsculas e minúsculas
    
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        } 
    }else{
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});