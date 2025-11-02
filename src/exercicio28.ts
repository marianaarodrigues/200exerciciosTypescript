/*

Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.

*/

let soma: number = 0;
let i: number = 1;
while(i <= 100) {
    soma += i;
    i++;
}
console.log(`A soma de todos os números de 1 a 100 é ${soma}.`);