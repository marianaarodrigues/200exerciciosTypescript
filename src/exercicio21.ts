/*

Escreva um programa que determina a estação do ano com base no mês.

*/

import * as readlineSync from "readline-sync";

console.log("Escolha um mês do ano, para determinar qual a estação correspondente:");
console.log(`
    1-Janeiro  2-Fevereiro  3-Março     4-Abril     5-Maio       6-Junho
    7-Julho    8-Agosto     9-Setembro  10-Outubro  11-Novembro  12-Dezembro
`);
const mes: string = readlineSync.question("Digite a opção referente ao mês escolhido, entre 1 e 12: ");
switch(mes) {
    case "1":
    case "2":
        console.log("Verão.");
        break;
    case "3":
        console.log("01 de março a 20 de março: verão. 21 de março a 31 de março: outono.");
        break;
    case "4":
    case "5":
        console.log("Outono.");
        break;
    case "6":
        console.log("01 de junho a 20 de junho: outono. 21 de junho a 30 de junho: inverno.");
        break;
    case "7":
    case "8":
        console.log("Inverno.");
        break;
    case "9":
        console.log("01 de setembro a 22 de setembro: inverno. 23 de setembro a 30 de setembro: primavera.");
        break;
    case "10":
    case "11":
        console.log("Primavera.");
        break;
    case "12":
        console.log("01 de dezembro a 20 de dezembro: primavera. 21 de dezembro a 31 de dezembro: verão.");
        break;
    default:
        console.log("Erro: O valor informado não é válido. Por favor, informe um mês do ano.");
        break;
}