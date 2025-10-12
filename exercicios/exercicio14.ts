/*

Escreva um programa que verifica se um ano é bissexto.

*/

let anoInformado: string | null = prompt("Digite um ano qualquer:");
if(anoInformado === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    let ano: number = parseInt(anoInformado);
    if(isNaN(ano)) {
        console.log("Erro: O ano informado não é valido. Por favor, informe um ano qualquer.");
    } else if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        console.log(`${ano} é ano bissexto.`);
    } else {
        console.log(`${ano} não é ano bissexto.`);
    }
}