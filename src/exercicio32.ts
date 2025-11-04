/*

Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

*/

import * as readlineSync from 'readline-sync';
const opcoesJogo: string[] = ["pedra", "papel", "tesoura"];
let opcaoUser: string = "";
console.log("Vamos brincar de Pedra, Papel ou Tesoura.");
console.log("Digite PARE para parar o jogo.");
do {
    opcaoUser = readlineSync.question("Escolha uma das opções: pedra, papel ou tesoura, ou PARE:").toLowerCase().trim();
    const indiceAleatorio = Math.floor(Math.random() * opcoesJogo.length);
    let opcaoComputador: string = opcoesJogo[indiceAleatorio];
    if(opcaoComputador === "pedra") {
        switch(opcaoUser) {
            case "pedra":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Empate.`);
                break;
            case "papel":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Você ganhou.`);
                break;
            case "tesoura":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Eu ganhei.`);
                break;
            case "pare":
                break;
            default:
                console.log("Erro: Opção inválida. Por favor, digite 'pedra', 'papel' ou 'tesoura'.");
        }
    } else if(opcaoComputador === "papel") {
        switch(opcaoUser) {
            case "pedra":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Eu ganhei.`);
                break;
            case "papel":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Empate.`);
                break;
            case "tesoura":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Você ganhou.`);
                break;
            case "pare":
                break;
            default:
                console.log("Erro: Opção inválida. Por favor, digite 'pedra', 'papel' ou 'tesoura'.");
        }
    } else {
        switch(opcaoUser) {
            case "pedra":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Você ganhou.`);
                break;
            case "papel":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Eu ganhei.`);
                break;
            case "tesoura":
                console.log(`Sua escolha: ${opcaoUser}, minha escolha: ${opcaoComputador}. Empate.`);
                break;
            case "pare":
                break;
            default:
                console.log("Erro: Opção inválida. Por favor, digite 'pedra', 'papel' ou 'tesoura'.");
        }
    }
} while (opcaoUser !== 'pare')