/*

Usando um laço while, crie um programa que inverta uma string.

*/

import * as readlineSync from 'readline-sync';
let stringInformada: string = readlineSync.question("Digite uma palavra ou frase qualquer:");
let stringInvertida: string = "";
const n: number = stringInformada.length;
let i: number = n - 1;
while(i >= 0) {
    const caractere: string = stringInformada[i];
    stringInvertida = stringInvertida + caractere;
    i--;
}
console.log(`A palavra/frase "${stringInformada}" invertida fica "${stringInvertida}".`);