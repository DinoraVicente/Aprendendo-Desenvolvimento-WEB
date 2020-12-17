// let arrayNumeros = [5, 3, 12, 17, 10, 99];
//     console.log(numeros[0]);
//     console.log(numeros[1]);
//     console.log(numeros[4]);
//     console.log(numeros[5]);

// console.log('Quantidade', numeros.length);

// Retorna o valor e o retira da array
// let numeroRetornado = numeros.pop();
//     console.log('Número retornado', numeroRetornado);
// console.log(numeros);

// pega valores dentro de uma array - 1° inicio, 2° final, adicionar um n° a mais.
// console.log(numeros.slice(4, 5));

// let numerosAleatorios = () => {
//     for(let i = 0; i < 100; i++){
//         const numeroAleatorio = parseInt(Math.random() * 10);
//         const numeroAleatorio1 = parseInt(Math.random() * 10);
//         if(numeroAleatorio <= 6 && numeroAleatorio1 <= 6 && numeroAleatorio < numeroAleatorio1){
//             console.log(numeroAleatorio, numeroAleatorio1);
//             console.log(arrayNumeros.slice(numeroAleatorio, numeroAleatorio1));
//             return arrayNumeros.slice(numeroAleatorio, numeroAleatorio1);
//         }else{
//             //cria um erro - excessão;
//             console.log('Erro na execução!');
//         }
//     }
// }

// const numero = numerosAleatorios();//

// Muda a array em uma string e qual o separador
// console.log(numeros.join(' '));

// let usuario = [
//     'Dinorá',
//     20,
//     'Brasil',
//     '2020'
// ];

// console.log(usuario);

// coloca mais um valor na array
// usuario.push('PR');
// console.log(usuario);

// Verifica que o valor consta na array (true ou false)
// console.log(usuario.includes('Dinorá'));

// Verifica que o valor consta na array e retorna a posição
// console.log(usuario.indexOf('Dinorá'));

// Junta 2 arrays
// let array1 = [3,2,1];
// let array2 = ['Dinorá', 'Vicente', 'de Souza', 'Neta'];
// let array3 = ['Oscar', 'da Silva'];
// let resultadoArrays = array1.concat(array2).concat(array3);
// console.log(resultadoArrays);

// Gera um novo array com a junção de todas as arrays que quiser
// ... - spread(espalhar)
// console.log([...array1, ...array2, ...array3]);

// array destructuring
let usuario = [
    'Dinorá',
    20,
    'Brasil',
    '2020'
];
console.log(usuario);

// maneira "antiga"

// let nome = usuario[0];
// let idade = usuario[1];
// let pais = usuario[2];
// let ano = usuario[3];

// de acordo com a posição da array
let [nome, idade, pais, ano] = usuario;
console.log(nome, idade, pais, ano);