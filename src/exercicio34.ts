/*

Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" 
e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz).

Segundo commit: Corrigindo a mensagem do commit original.

*/

let i: number = 1;
console.log("100 primeiros termos do Problema FizzBuzz:");
while(i <= 100) {
    if(i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
    } else if(i % 5 !== 0) {
        console.log("Fizz");
    } else if(i % 3 !== 0) {
        console.log("Buzz");
    } else {
        console.log("FizzBuzz");
    }
    i++;
}