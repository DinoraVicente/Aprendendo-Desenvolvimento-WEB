console.log(`Trabalhando com condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade!");
//     listaDestinos.splice(1, 1); //Removendo itens
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado!");
//     listaDestinos.splice(1, 1); //Removendo itens
// } else {
//     console.log("Comprador menor de idade, não é possível vender ingresso");
// }

// || usado como "ou"
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!");
    listaDestinos.splice(1, 1); //Removendo itens
     } else {
    console.log("Comprador menor de idade, não é possível vender ingresso");
}

console.log("Embarque: \n\n");
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Infelizmente você não pode embarcar");
}


console.log(listaDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);