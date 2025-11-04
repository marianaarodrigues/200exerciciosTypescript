/*

Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais.

*/

// Considerando que os números naturais começam com 1: 1, 2, 3, 4, 5, ...
let soma: number = 0;
let i: number = 1;
do {
    soma += i * i * i;
    i++;
} while(i <= 10)
console.log(`A soma dos cubos dos primeiros 10 números naturais é: ${soma}.`);