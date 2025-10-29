function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = calcularMedia(nota1, nota2, nota3);
alert(`A média das notas é: ${media.toFixed(2)}`);
