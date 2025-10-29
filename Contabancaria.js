class ContaBancaria {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const conta = new ContaBancaria(80);
conta.sacar(55);
console.log("Saldo final:", conta.saldo);
