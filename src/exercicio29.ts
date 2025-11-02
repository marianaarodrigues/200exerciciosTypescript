/*

Usando um laço do-while, imprima todos os números pares de 1 a 100.

*/

let i: number = 2;
do {
    if(i % 2 ==0) {
        console.log(i);
    }
    i++;
} while(i <= 100)