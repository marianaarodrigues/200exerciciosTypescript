/*

Escreva um programa que verifica se uma palavra é um palíndromo.

*/

/*
let valorInformado: string | null = prompt("Digite uma palavra ou frase qualquer:");
if(valorInformado === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    // Remover possíveis sinais gráficos e espaços em branco, e colocar todas as letras minúsculas
    let valor: string = valorInformado.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '').toLowerCase();
    let isPalindromo = true;
    let n = valor.length;
    for (let i: number = 0; i < Math.floor(n / 2); i++) {
        if (valor[i] !== valor[(n - 1) - i]) {
            isPalindromo = false;
            break; 
        }
    }
    if (isPalindromo) {
        console.log(`"${valorInformado}" é um palíndromo.`);
    } else {
        console.log(`"${valorInformado}" não é palíndromo.`);
    }
}
*/

let valorInformado: string | null = prompt("Digite uma palavra ou frase qualquer:");
if (valorInformado === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    // Remover possíveis sinais gráficos e espaços em branco, e colocar todas as letras minúsculas
    let valorFormatado: string = valorInformado.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '').toLowerCase();
    let valorInvertido: string = valorFormatado.split('').reverse().join('');
    if (valorFormatado === valorInvertido) {
        console.log(`"${valorInformado}" é um palíndromo.`);
    } else {
        console.log(`"${valorInformado}" não é palíndromo.`);
    }
}
export {};