class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}

const produto1 = new Produto("Camiseta", 100);
produto1.aplicarDesconto(20);
console.log(`Preço com desconto: ${produto1.preco}`);
