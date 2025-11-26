 constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}// Exemplo de teste
const pessoa1 = new Pessoa("Maria", 25);
pessoa1.apresentar();
// Resultado esperado:
// Olá, meu nome é Maria e tenho 25 anos.
