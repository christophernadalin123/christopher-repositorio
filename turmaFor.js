// Cria array chamado 'turma' com objetos
let turma = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 6 },
  { nome: "Pedro", nota: 10 }
];

// Mostra cada aluno com sua nota
for (let i = 0; i < turma.length; i++) {
  console.log(turma[i].nome + ": " + turma[i].nota);
}

// Calcula média da turma
let soma = 0;
for (let i = 0; i < turma.length; i++) {
  soma += turma[i].nota;
}
let media = soma / turma.length;
console.log("Média da turma: " + media);

// Verifica aprovação
for (let aluno of turma) {
  if (aluno.nota >= 7) {
    console.log(aluno.nome + " está aprovado");
  } else {
    console.log(aluno.nome + " está reprovado");
  }
}
