// Define uma interface para representar um produto
interface Produto {
  nome: string;
  preco: number;
  desconto?: number; // opcional
}

// Função para calcular o preço final com desconto
function calcularPrecoFinal(produto: Produto): number {
  const desconto = produto.desconto ?? 0; // usa 0 se não houver desconto
  return produto.preco - (produto.preco * desconto / 100);
}

// Exemplo de uso
const produto1: Produto = {
  nome: "Fone de ouvido",
  preco: 200,
  desconto: 15
};

console.log(`Preço final de ${produto1.nome}: R$ ${calcularPrecoFinal(produto1).toFixed(2)}`);
