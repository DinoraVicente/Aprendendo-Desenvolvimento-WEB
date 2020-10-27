console.log("Trabalhando com Atribuição de Variáveis");

const idade = 29;
const primeiroNome = "Dinorá";
const sobrenome = "Vicente";

//console.log(nome + sobrenome); //Fica junto
//console.log(nome + " " + sobrenome); 
console.log(primeiroNome, sobrenome); //Deixa um espaço
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//LET - é uma variável, pode ser mudada mais de uma vez
//usar ela poucas vezes, não ficar trocando de tipo de variavel
let contador = 0;
contador = contador + 1;
//normal de se fazer, valores numericos.

nomeCompleto = primeiroNome + sobrenome; //Não precisa por const nesse caso, pois está sobrescrevendo ela
console.log(nomeCompleto);