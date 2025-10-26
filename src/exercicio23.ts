/*

Escreva um programa que verifica as cores de um semáforo.

*/

import * as readlineSync from "readline-sync";

console.log("Escolha uma cor do semáforo:");
console.log(`
    1-Verde  2-Amarelo  3-Vermelho
`);
const mes: string = readlineSync.question("Digite a opção referente à cor escolhida, 1, 2 ou 3: ");
switch(mes) {
    case "1":
        console.log("SIGA.");
        break;
    case "2":
        console.log("ATENÇÃO.");
        break;
    case "3":
        console.log("PARE.");
        break;
    default:
        console.log("Erro: O valor informado não é válido. Por favor, informe uma cor do semáforo.");
        break;
}