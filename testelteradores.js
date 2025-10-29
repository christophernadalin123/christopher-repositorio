// Exercício 10 - Enviar e-mails com for...of
const clientes = ["Ana", "Bruno", "Carla", "Diego", "Eduardo"];
for (const cliente of clientes) {
  console.log(`Enviando e-mail de agradecimento para ${cliente}.`);
}

console.log("\n");

// Exercício 12 - Filtrar compras recentes com forEach
const compras = [
  { nome: "Ana", data: "2025-10-20" },
  { nome: "Bruno", data: "2025-09-15" },
  { nome: "Carla", data: "2025-10-05" },
  { nome: "Diego", data: "2025-08-29" },
  { nome: "Eduardo", data: "2025-10-28" },
  { nome: "Fernanda", data: "2025-10-10" },
  { nome: "Gabriel", data: "2025-09-25" },
  { nome: "Helena", data: "2025-10-12" },
  { nome: "Igor", data: "2025-10-01" },
  { nome: "Juliana", data: "2025-09-30" }
];

const hoje = new Date();
compras.forEach((compra) => {
  const dataCompra = new Date(compra.data);
  const diferenca = (hoje - dataCompra) / (1000 * 60 * 60 * 24);
  if (diferenca <= 30) {
    console.log(`${compra.nome} comprou nos últimos 30 dias.`);
  }
});

console.log("\n");

// Exercício 14 - Remover duplicados com Set e iterador
const nomes = ["Ana", "Bruno", "Carla", "Ana", "Diego", "Carla", "Eduardo"];
const nomesUnicos = new Set(nomes);

for (const nome of nomesUnicos) {
  console.log(nome);
}
