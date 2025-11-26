
// Lista de itens no carrinho
let carrinho = ["camiseta", "calça jeans", "tênis"];

// Adicionando um novo item
carrinho.push("boné");

// Removendo o último item
carrinho.pop();

// Exibindo o carrinho
console.log(carrinho);
// Conjunto de participantes
let participantes = new Set();

// Adicionando participantes
participantes.add("Ana");
participantes.add("Carlos");
participantes.add("Ana"); // Ignorado, pois já existe

// Verificando se alguém está na lista
console.log(participantes.has("Carlos")); // true

// Exibindo todos os participantes
console.log([...participantes]);
// Mapa de contatos
let agenda = new Map();

// Adicionando contatos
agenda.set("João", "99999-1234");
agenda.set("Maria", "98888-5678");

// Acessando número de telefone
console.log(agenda.get("Maria")); // 98888-5678

// Exibindo todos os contatos
agenda.forEach((numero, nome) => {
  console.log(`${nome}: ${numero}`);
});
