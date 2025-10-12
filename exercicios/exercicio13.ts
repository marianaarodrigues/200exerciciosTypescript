/*

Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa 
e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

IMC em adultos Condição

Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 25 Peso normal
Entre 25 e 30 Acima do peso
Acima de 30 obeso

*/

let pesoInformado: string | null = prompt("Informe o peso da pessoa em kg:");
let alturaInformada: string | null = prompt("Informe a altura da pessoa em metros:");
let imc;
if(pesoInformado === null || alturaInformada === null) {
    console.log("Erro: Valor informado é nulo. Não é possível continuar.");
} else {
    let altura: number = parseFloat(alturaInformada);
    let peso: number = parseFloat(pesoInformado);
    // A altura máxima registrada para um ser humano é de 2,72 metros, mais do que isso é considerado
    // impossível devido a limites físicos.
    const alturaInvalida = isNaN(altura) || altura < 0 || altura > 3.0;
    // O ser humano com o maior peso já registrado atingiu aproximadamente 635 kg.
    const pesoInvalido = isNaN(peso) || peso < 0 || peso > 650.0;
    if (alturaInvalida || pesoInvalido) {
        console.log("Erro: Os dados informados não são válidos. Por favor, informe a altura em metros e o peso em kg.");
    } else {
        imc = peso / (altura * altura);
        if (imc < 18.5) {
            console.log(`IMC = ${imc.toFixed(1)}, abaixo do peso.`);
        } else if (imc >= 18.5 && imc < 25) {
            console.log(`IMC = ${imc.toFixed(1)}, peso normal.`);
        } else if (imc >= 25 && imc < 30) {
            console.log(`IMC = ${imc.toFixed(1)}, sobrepeso.`);
        } else {
            console.log(`IMC = ${imc.toFixed(1)}, obesidade.`);
        }
    }
}