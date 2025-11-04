/*

Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2).

*/

let resultado: number[] = [];
for(let n = 1; n <= 10; n++) {
    resultado.push(n*(n+1)/2);
}
console.log(`10 primeiros números triangulares: ${resultado.join(', ')}.`);