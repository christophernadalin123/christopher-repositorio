// Exercício 1
const nomes = ["Ana", "Bruno", "Carla"];
const iterador = nomes[Symbol.iterator]();

while (true) {
  const atual = iterador.next();
  if (atual.done) break;
  console.log(atual.value);
}


  
// Exercício 3
const clientes = ["Ana", "Bruno"];
const iterador2 = clientes[Symbol.iterator]();

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());


  
// Exercício 5
const texto = "Carla";
for (const letra of texto) {
  console.log(letra);
}


  
// Exercício 9
const dados = new Set(["A", "B", "C"]);
const iterador3 = dados[Symbol.iterator]();

console.log(iterador3.next().value);


  
// Exercício 11
const mapa = new Map([[1, "A"], [2, "B"]]);
for (const par of mapa) {
  console.log(par);
}
