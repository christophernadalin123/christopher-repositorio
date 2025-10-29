function buscarProduto(lista, nomeBusca) {
  for (let produto of lista) {
    if (produto.nome.toLowerCase() === nomeBusca.toLowerCase()) {
      return produto;
    }
  }
  return null;
}

// Exemplo de uso:
const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 30 }
];

const resultado = buscarProduto(produtos, "Tênis");

if (resultado) {
  console.log("Produto encontrado:", resultado);
} else {
  console.log("Produto não encontrado");
}
