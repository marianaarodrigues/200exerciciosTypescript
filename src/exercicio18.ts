/*

Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

*/

function podeDirigir() {
    let idadeInformada: string | null = prompt("Informe a idade da pessoa:");
    if (idadeInformada === null) {
        console.log("Erro: Valor foi cancelado/é nulo. Não é possível continuar.");
        return;
    }
    if (idadeInformada.trim() === "") {
    console.log("Erro: Nenhum valor foi digitado. Por favor, informe a idade da pessoa.");
    return;
    }
    const idade: number = parseInt(idadeInformada);
    if (isNaN(idade)) {
        console.log("Erro: O valor informado não é válido. Por favor, informe a idade da pessoa.");
        return;
    }
    idade >= 18 ? console.log("A pessoa é maior de idade e pode dirigir.") : console.log("A pessoa é menor de idade e não pode dirigir.");
}
podeDirigir();