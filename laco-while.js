// 1. Palavra com mais de 8 letras
let palavra = "";
while (palavra.length <= 8) {
  palavra = prompt("Digite uma palavra com mais de 8 letras:");
}
console.log("Palavra aceita: " + palavra);

// 2. Soma aleatória até ultrapassar 500
let soma = 0;
while (soma <= 500) {
  let numero = Math.floor(Math.random() * 100);
  soma += numero;
  console.log("Número: " + numero + " | Soma: " + soma);
}
console.log("Soma final ultrapassou 500!");

// 3. Tamanho de calçado entre 34 e 44
let tamanho = 0;
while (tamanho < 34 || tamanho > 44) {
  tamanho = Number(prompt("Digite seu número de calçado (entre 34 e 44):"));
}
console.log("Tamanho de calçado válido: " + tamanho);

// 4. Encontrar número múltiplo de 3 e 5
let numero = 0;
while (true) {
  numero = Math.floor(Math.random() * 100);
  console.log("Gerado: " + numero);
  if (numero % 3 === 0 && numero % 5 === 0 && numero !== 0) {
    console.log("Encontrado múltiplo de 3 e 5: " + numero);
    break;
  }
}

// 5. Idade entre 18 e 60
let idade = 0;
while (idade < 18 || idade > 60) {
  idade = Number(prompt("Digite sua idade (entre 18 e 60):"));
}
console.log("Idade válida: " + idade);

// 6. Senha com letra e número
let senha = "";
function temLetra(str) { return /[a-zA-Z]/.test(str); }
function temNumero(str) { return /[0-9]/.test(str); }
while (!(temLetra(senha) && temNumero(senha))) {
  senha = prompt("Crie uma senha com pelo menos 1 letra e 1 número:");
}
console.log("Senha válida!");
