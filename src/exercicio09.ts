/*

Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.    

*/

let valorInformado: string | null = prompt("Digite um número qualquer:");
if(valorInformado === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    let numero: number = parseFloat(valorInformado);
    if(isNaN(numero)) {
        console.log("Erro: Valor informado não é válido. Por favor, digite um número qualquer.");
    } else if(numero < 0) {
        console.log(`O número ${numero} é negativo.`);
    } else if(numero === 0) {
        console.log(`O número ${numero} é igual a zero.`);
    } else {
        console.log(`O número ${numero} é positivo.`);
    }
}