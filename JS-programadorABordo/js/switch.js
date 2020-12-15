var cor = 'amarelo';
switch (cor) {
    case 'azul':
        console.log('Cor azul');
        break;

    case 'amarelo':
        console.log('Cor amarelo');
        break;

    case 'vermelho':
        console.log('Cor vermelha');
        break;
}

switch (cor) {
    case 'azul':
        console.log('Cor azul');
        break;

    case 'verde':
        console.log('Cor amarelo');
        break;

    case 'vermelho':
        console.log('Cor vermelha');
        break;
    
    default:
        console.log("Cor padrão");
        break;
}

switch (cor) {
    case 'laranja':
    case 'amarelo':
    case 'vermelho':
        console.log('Cor quente!');
        break;

    case 'azul':
    case 'verde':
    case 'roxo':
        console.log('Cor fria!');
        break;

    default:
        console.log('Não identificado!');
        break;
}