/*

Escreva um programa que verifica se uma pessoa pode votar com base na idade.

*/

let idadeInformada: string | null = prompt("Informe a idade da pessoa em anos:");
if(idadeInformada === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    let idade: number = parseInt(idadeInformada);
    // A idade máxima natural para um ser humano, segundo pesquisas recentes, pode estar em torno dos 150 anos.
    const idadeInvalida = isNaN(idade) || idade < 0 || idade > 150;
    if(idadeInvalida) {
        console.log("Erro: Idade informada não é válida. Por favor, informe a idade em anos.");
    } else {
        const mensagem = idade >= 18 ? "A pessoa pode votar." : "A pessoa não pode votar.";
        console.log(mensagem);
    }
}