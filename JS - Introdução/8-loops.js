console.log(`\n Trabalhando com condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis: ");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;

while(contador < 3) {
    if(listaDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("\n Destino existe:", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("\n Boa viagem!");
}else{
    console.log("\n Desculpe, ocorreu um erro inesperado...");
}
// for (1- declaração de inicialização de variável, 
//2- condição que vai ser verificada depois de cada loop,
//3- o que vai ser executado depois de cada loop.
for(let i = 0; i < 3; i++) {
    if(listaDestinos[i] == destino) {
        destinoExiste = true;
        console.log("Funcionou");
    }
}