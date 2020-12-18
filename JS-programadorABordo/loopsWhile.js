// While - Executa enquanto for verdadeira(true)

// let contador = 0;
// while(contador <= 5){
//     console.log(contador);
//     ++contador;
// }

// while(contador <= 5){
//     if(contador === 3){
//         break;
//     }
//     console.log(contador);
//     ++contador;
// }

let contador = 0;
while(contador <= 100){
    if(contador % 3 === 0 & contador % 5 === 0){
        console.log(`${contador} - Ping pong`);
    } else if(contador % 3 === 0){
        console.log(`${contador} - Ping`);
    } else if(contador % 5 === 0){
        console.log(`${contador} - pong`);
    }
    ++contador;
}