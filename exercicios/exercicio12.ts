/*

Escreva um programa que verifica a situação de um(a) estudante de acordo com sua média final.

*/

let mediaInformada = prompt("Informe a média do(a) estudante, de 0 a 10:");
if(mediaInformada === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    let media: number = parseFloat(mediaInformada);
    const mediaInvalida = isNaN(media) || media < 0 || media > 10;
    if(mediaInvalida) {
        console.log("Erro: O valor informado não é válido. Por favor, digite a média, de 0 a 10.");
    } else {
        const resultado = media >= 7.0 ? "aprovado(a)" : "reprovado(a)";
        console.log(`Estudante ${resultado}.`);
    }
}