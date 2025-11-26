# Define função para calcuclar preço final
def calcular_preco_final(nome, preco, desconto=0):
    preco_final = preco - (preco * desconto / 100)
    print(f"Preço final de {nome}: R$ {preco_final:.2f}")
console.log(`Preço final de ${produto1.nome}: R$ ${calcularPrecoFinal(produto1).toFixed(2)}`);
// Função para calcular o preço final com desconto
function calcularPrecoFinal(produto: Produto): number {
  const desconto = produto.desconto ?? 0; // usa 0 se não houver desconto
  return produto.preco - (produto.preco * desconto / 100);
}

//
