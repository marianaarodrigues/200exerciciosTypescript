/*

Escreva um programa que recebe duas notas de um aluno, calcula a média e 
imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

*/

let valorInformado1: string | null = prompt("Informe a primeira nota, de 0 a 10:");
let valorInformado2: string | null = prompt("Informe a segunda nota, de 0 a 10:");
if(valorInformado1 === null || valorInformado2 === null ) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    let nota1 = parseFloat(valorInformado1);
    let nota2 = parseFloat(valorInformado2);
    const nota1Invalida = isNaN(nota1) || nota1 < 0 || nota1 > 10;
    const nota2Invalida = isNaN(nota2) || nota2 < 0 || nota2 > 10;
    if(nota1Invalida || nota2Invalida) {
        console.log("Erro: Valores informados não são válidos. Por favor, digite as notas, de 0 a 10.");
    } else {
        let media = (nota1 + nota2) / 2;
        const resultado = media >= 7.0 ? "aprovado(a)" : "reprovado(a)";
        console.log(`Média: ${media}, estudante ${resultado}.`);
    }
}