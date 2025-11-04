/*

Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.

*/

import * as readlineSync from 'readline-sync';
function adivinharNumero() {
    let min: number = 1;
    let max: number = 100;
    console.log("Pense em um número inteiro entre 1 e 100. Eu vou adivinhar.");
    console.log("Responda 'MAIOR', 'MENOR' ou 'CORRETO'.");
    let tentativas: number = 0;
    const max_tentativas = 7;
    while(min <= max && tentativas <= max_tentativas) {
        let palpite = Math.floor((min + max) / 2);
        tentativas++;
        let resposta = readlineSync.question(`Tentativa de número ${tentativas}: O número que você pensou é ${palpite}? (MAIOR, MENOR, CORRETO): `);
        resposta = resposta!.toUpperCase().trim();
        if(resposta === 'CORRETO') {
            console.log(`O seu número é ${palpite} em ${tentativas} tentativas.`);
            return;
        } else if(resposta === 'MAIOR') {
            min = palpite + 1;
            console.log(`Ok, o número está entre ${min} e ${max}.`);
        } else if(resposta === 'MENOR') {
            max = palpite - 1;
            console.log(`Ok, o número está entre ${min} e ${max}.`);
        } else {
            console.log("Resposta inválida. Por favor, responda 'MAIOR', 'MENOR' ou 'CORRETO'.");
            tentativas--;
        }
        if(min > max) {
            console.log("Houve alguma inconsistência. Seu número não está no intervalo que você indicou!");
            return;
        }
    }
    if (min === max && tentativas <= max_tentativas) {
        console.log(`O seu número só pode ser ${min}!`);
    } else {
        console.log("O número não foi encontrado no limite de tentativas. Tente novamente.");
    }
}
adivinharNumero();