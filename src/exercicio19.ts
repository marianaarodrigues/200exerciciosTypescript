/*

Escreva um programa que verifica se um número está dentro de um determinado intervalo.

*/

function verificarIntervalo() {
    let primeiroValorInformado: string | null = prompt("Informe o valor inicial do intervalo:");
    let segundoValorInformado: string | null = prompt("Informe o valor final do intervalo:");
    let numeroInformado: string | null = prompt("Digite um número qualquer:");

    if (primeiroValorInformado === null || segundoValorInformado === null || numeroInformado === null) {
        console.log("Erro: Pelo menos um valor foi cancelado/é nulo. Não é possível continuar.");
        return;
    }

    if (primeiroValorInformado.trim() === "" || segundoValorInformado!.trim() === "" || numeroInformado!.trim() === "") {
        console.log("Erro: Pelo menos um valor não foi digitado. Não é possível continuar.");
        return;
    }

    const primeiroValor: number = parseFloat(primeiroValorInformado);
    const segundoValor: number = parseFloat(segundoValorInformado);
    const numero: number = parseFloat(numeroInformado);

    if(isNaN(primeiroValor) || isNaN(segundoValor) || isNaN(numero)) {
        console.log("Erro: Os valores informados não são válidos. Por favor, informe os valores inicial e final, e o número.");
        return;
    }

    const minimo: number = Math.min(primeiroValor, segundoValor);
    const maximo: number = Math.max(primeiroValor, segundoValor);
    
    if(numero >= minimo && numero <= maximo) {
        console.log(`O número ${numero} está **dentro** do intervalo [${minimo}, ${maximo}].`);
    } else {
        console.log(`O número ${numero} **não está** dentro do intervalo [${minimo}, ${maximo}].`);
    }
}

verificarIntervalo();