import entradaDados from 'readline-sync';

console.log("Conversos de Milhas para Quimlômetros: \n");


let mi = entradaDados.question('Informe o valor em Milhas: ');

let km = mi / 0.62137;

console.log(mi+"mi equivale a "+km+"km");

