/*

Escreva um programa que determina o número de dias em um mês.

*/

import * as readlineSync from "readline-sync";

console.log("Escolha um mês do ano, para determinar qual o número de dias:");
console.log(`
    1-Janeiro  2-Fevereiro  3-Março     4-Abril     5-Maio       6-Junho
    7-Julho    8-Agosto     9-Setembro  10-Outubro  11-Novembro  12-Dezembro
`);
const mes: string = readlineSync.question("Digite a opção referente ao mês escolhido, entre 1 e 12: ");
switch(mes) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        console.log("31 dias.");
        break;
    case "2":
        console.log("28 dias em anos comuns, e 29 dias em anos bissextos.");
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        console.log("30 dias.");
        break;
    default:
        console.log("Erro: O valor informado não é válido. Por favor, informe um mês do ano.");
        break;
}