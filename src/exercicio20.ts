/*

Escreva um programa que imprime uma classificação baseada na nota de um aluno.

*/

function verificarAprovacao() {
    let notaInformada: string | null = prompt("Informe a nota do(a) estudante, de 0 a 10:");

    if (notaInformada === null || notaInformada.trim() === "") {
        console.log("Erro: Valor é nulo ou não foi digitado. Não é possível continuar.");
        return;
    }

    const nota: number = Number.parseFloat(notaInformada);

    if(isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Erro: O valor informado é inválido. Por favor, informe a nota de 0 a 10.");
        return;
    }

    // const mensagem = nota >= 7 ? "aprovado(a)" : "reprovado(a)";
    // console.log(`Considerando que a nota mínima para aprovação é 7, estudade ${mensagem}.`);

    let classificacao: string;

    if (nota >= 9) {
        classificacao = "Aprovado(a) com Distinção";
    } else if (nota >= 7) {
        classificacao = "Aprovado(a)";
    } else if (nota >= 5) {
        classificacao = "Em Recuperação";
    } else {
        classificacao = "Reprovado(a)";
    }

    console.log(`Nota: ${nota}. O(a) estudante está ${classificacao}.`);
}

verificarAprovacao();