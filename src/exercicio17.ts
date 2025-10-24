/*

Escreva um programa que determina se um número é par ou ímpar.

*/

function numeroParOuImpar() {
    let valorInformado: string | null = prompt("Informe um número inteiro qualquer:");
    if (valorInformado === null) {
        console.log("Erro: Valor foi cancelado/é nulo. Não é possível continuar.");
        return;
    }
    if (valorInformado.trim() === "") {
    console.log("Erro: Nenhum valor foi digitado. Por favor, informe um número inteiro.");
    return;
    }
    const numero: number = Number(valorInformado);
    if (isNaN(numero) || !Number.isInteger(numero)) {
        console.log("Erro: O valor informado não é válido. Por favor, informe um número inteiro.");
        return;
    }
    if (numero % 2 === 0) {
    console.log("O número informado é par.");
    } else {
        console.log("O número informado é ímpar.");
    }
}
numeroParOuImpar();