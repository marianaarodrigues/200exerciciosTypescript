/*

Escreva um programa que determina o maior entre três números.

*/

/*
let valor1: string | null = prompt("Digite o primeiro número:");
let valor2: string | null = prompt("Digite o segundo número:");
let valor3: string | null = prompt("Digite o terceiro número:");
if (valor1 === null || valor2 === null || valor3 === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    const num1: number = parseFloat(valor1);
    const num2: number = parseFloat(valor2);
    const num3: number = parseFloat(valor3);
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Erro: Os valores informados não são válidos. Por favor, digite três números quaisquer.");
    } else {
        let maiorNumero: number;
        if(num1 >= num2 && num1 >= num3) {
            maiorNumero = num1;
        } else if(num2 >= num1 && num2 >= num3) {
            maiorNumero = num2;
        } else {
            maiorNumero = num3;
        }
        console.log(`O maior número é: ${maiorNumero}.`);
    }
}
export {};
*/

function encontrarValorMaximo() {
    let valor1: string | null = prompt("Digite o primeiro número:");
    let valor2: string | null = prompt("Digite o segundo número:");
    let valor3: string | null = prompt("Digite o terceiro número:");

    if (valor1 === null || valor2 === null || valor3 === null) {
        console.log("Erro: Pelo menos um valor foi cancelado/é nulo. Não é possível continuar.");
        return;
    }

    const num1: number = parseFloat(valor1);
    const num2: number = parseFloat(valor2);
    const num3: number = parseFloat(valor3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Erro: Os valores informados não são válidos. Por favor, digite três números quaisquer.");
        return;
    }

    const maiorNumero: number = Math.max(num1, num2, num3);

    console.log(`Entre os números ${num1}, ${num2} e ${num3}, o maior é: ${maiorNumero}.`);
}

encontrarValorMaximo();