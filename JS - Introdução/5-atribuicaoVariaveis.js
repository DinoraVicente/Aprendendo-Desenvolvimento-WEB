console.log("Trabalhando com Atribuição de Variáveis");

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

let idade; //declarando variável
idade = 26; //Atribuindo valor
//Const tem que colocar tudo em uma linha,
//A declaração e a atribuição de valores, já o let não.
idade = idade + 1;
console.log(idade);