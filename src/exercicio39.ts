/*

Usando um laço for, crie um programa que calcule o fatorial de um número.

*/

import * as readlineSync from 'readline-sync';
let numero: number = parseInt(readlineSync.question("Digite um número inteiro não negativo, para cálculo do fatorial:"));
const numeroInvalido: boolean = isNaN(numero) || numero < 0;
if(numeroInvalido) {
    console.log("Erro: O valor informado não é válido. Por favor, digite um número inteiro não negativo.");
} else {
    let resultado: number = 1;
    for(let i = 0; i < numero; i++) {
        resultado = resultado * (numero - i);
    }
    console.log(`O fatorial de ${numero} é ${resultado}.`);
}