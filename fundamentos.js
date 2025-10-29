// 9. Variável idade
let idade = 30;
console.log(idade);



// 10. Função soma
function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3));



// 11. Par ou ímpar
let num = 7;
if (num % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}



// 12. Alfabeto A-Z
for (let letra = 65; letra <= 90; letra++) {
  console.log(String.fromCharCode(letra));
}



// 13. Média de 3 números
let n1 = 8;
let n2 = 6;
let n3 = 10;
let media = (n1 + n2 + n3) / 3;
console.log("Média: " + media);



// 14. Olá, mundo!
console.log("Olá, mundo!");



// 15. While de 5 a 1
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}



// 16. Debugger
function calcularProduto(a, b) {
  let resultado = a * b;
  debugger;
  return resultado;
}
calcularProduto(5, 10);
