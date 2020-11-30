let func = function(){
    console.log(this.nome)
}

let obj1 = {
    nome: "objeto 1",
    fu: func,
}

let obj2 = {
    nome: "objeto 2",
    fu: func,
}

let pessoa = {
    nome: "Dinorá",
    idade: 20,
    cartoes: {
        bradesco: {
            clt: 1,
            pj: 2
        },
        nubank: 2
    },
    andar: ()=>{
        return "Estou andando!";
    }
}

console.log(pessoa.andar());


obj1.fu();
obj2.fu();
