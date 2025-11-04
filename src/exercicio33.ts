/*

Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

*/

let penultimo: number = 0;
let ultimo: number = 1;
let sequencia: number[] = [penultimo, ultimo];
for(let i = 0; i < 8; i++) {
    let proximo: number = penultimo + ultimo;
    sequencia.push(proximo);
    penultimo = ultimo;
    ultimo = proximo;
}
console.log(`10 primeiros termos da sequência de Fibonacci: ${sequencia.join(', ')}.`);