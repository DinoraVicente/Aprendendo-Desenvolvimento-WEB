console.log(`Criando Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)
//Nova Lista

listaDestinos.push(`Itapoá`); //Adicionando um item na lista

console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDestinos);

listaDestinos.splice(1, 1); //Contagem começa em 0
console.log(listaDestinos);

console.log(listaDestinos[1]);// Se quiser que apareça um item específico.