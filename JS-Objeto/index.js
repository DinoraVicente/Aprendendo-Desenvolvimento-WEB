class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    
    constructor(agencia) {
        this._agencia = agencia;
        this._saldo = 0;
    }

    sacar(valor){
        
        if(valor >= 10000){
            console.log("Valor máximo atingido!");
            return;
        }

        if(this._saldo >= valor){   
            this._saldo -= valor;
        }        
    }

    depositar(valor){
        if (valor > 0){
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11022233311;

const contaCorrenteRicardo = new ContaCorrente(1001);

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(10050);

console.log(contaCorrenteRicardo);