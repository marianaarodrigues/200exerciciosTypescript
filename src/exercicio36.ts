/*

Usando um laço for, imprima todos os números perfeitos de 1 a 100 
(um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número).

*/

// Verificando todos os números de 1 até n - 1:
// let numerosPerfeitos = [];
// for (let numero = 1; numero <= 100; numero++) {
//     let somaDivisores = 0;
//     for (let i = 1; i < numero; i++) {
//         if (numero % i === 0) {
//             somaDivisores += i;
//         }
//     }
//     if (somaDivisores === numero && numero > 1) {
//         numerosPerfeitos.push(numero);
//     }
// }
// console.log(`Números perfeitos de 1 a 100: ${numerosPerfeitos.join(', ')}.`);

// Código otimizado: Para qualquer número n, os divisores sempre vêm em pares complementares.
// Podemos parar de procurar na raiz quadrada de n (ponto de simetria da lista de todos os divisores de n).
let numerosPerfeitos: number[] = [];
const limite: number = 100;
for (let numero: number = 2; numero <= limite; numero++) {
    let somaDivisores: number = 1;
    const raizQuadrada: number = Math.floor(Math.sqrt(numero));
    for (let i = 2; i <= raizQuadrada; i++) {
        if (numero % i === 0) {
            somaDivisores += i;
            const parDivisor = numero / i;
            if (parDivisor !== i) {
                somaDivisores += parDivisor;
            }
        }
    }
    if (somaDivisores === numero) {
        numerosPerfeitos.push(numero);
    }
}
console.log(`Números perfeitos de 1 a ${limite}: ${numerosPerfeitos.join(', ')}.`);