// Lista de nomes (permite repetição)
let nomes = [];

// Conjunto de e-mails (não permite repetição)
let emails = new Set();

// Mapa de telefones (ID → telefone)
let telefones = new Map();

// Cadastro dos nomes
for (let i = 0; i < 10; i++) {
  let nome = prompt("Digite o nome do cliente:");
  nomes.push(nome);
}

// Cadastro dos e-mails
for (let i = 0; i < 10; i++) {
  let email = prompt("Digite o e-mail do cliente:");
  emails.add(email);
}

// Cadastro dos telefones com ID
for (let i = 0; i < 10; i++) {
  let id = prompt("Digite o ID do cliente:");
  let tel = prompt("Digite o telefone do cliente:");
  telefones.set(id, tel);
}

// Exibindo os resultados
console.log("Lista de Nomes Cadastrados:");
nomes.forEach(n => console.log(n));

console.log("Conjunto de E-mails Únicos:");
emails.forEach(e => console.log(e));

console.log("Mapa de Telefones por ID:");
telefones.forEach((telefone, id) => {
  console.log(`${id}: ${telefone}`);
});
