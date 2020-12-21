// for (let contador = 0; contador < 10; contador++){
//     console.log(contador);
// }

// let numerosAleatorios = [3, 8, 10, 31];
// for(let contador = 0; contador < numerosAleatorios.length; contador++){
//     console.log(`${contador} - ${numerosAleatorios[contador]}`);
// }

// for(let i = numerosAleatorios.length - 1; i >= 0; i--){
//     console.log(`Posição ${i} com decremento: ${numerosAleatorios[i]}`)
// }

// let i=0;
// for( ; i < numerosAleatorios.length;){
//     console.log(`Sem valor inicial e incremento: ${numerosAleatorios[i]}`);
//     i++;
// }

// // ou

// for( i=0; i < numerosAleatorios.length; i++){
//     console.log(`Sem valor inicial e incremento: ${numerosAleatorios[i]}`);
// }

// let condicao = true;
// let contador = 1;

// for( ; condicao; ){
//     if(contador % 5 === 0){
//         condicao = false;
//     }
//     console.log(`condição boleana simples: ${contador}`);
//     ++contador;
// }

// for(let i=0; i<10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(`Utilizando break ${i}`)
// }

// // continue, ele para e não executa o resto do código
// // ímpar
// for(let i=0; i<=50; i++){
//     if(i % 2 === 0) {
//         continue;
//     }
//     console.log('Utilizando continue', i)
// }

// // par
// for(let i=0; i<=50; i++){
//     if(i % 2 !== 0) {
//         continue;
//     }
//     console.log('Utilizando continue', i)
// }

//For Of
//Armazena o valor de cada posição da variável em loop
// let numerosAleatorios = [3, 8, 10, 31, 60, 70, 293];
// for (let num of numerosAleatorios){
//     console.log('for of', num);
// }

// for (let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
//         if(j % 2 === 0){
//             continue; 
//         }
//         console.log(`i: ${i}; j: ${j}`)
//     }
// }

for (let i = 0; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`Ping Pong: ${i}`);
    } else if(i % 3 === 0){
        console.log(`Ping: ${i}`);
    } else if(i % 5 === 0){
        console.log(`Pong: ${i}`);
    }
}

// for in - objetos