const numeros = [10, 1, 2];

console.log("\nArray antes da ordenação: \n");
console.log(numeros);

function ordenaNumeros(a, b) {
  console.log("A: "+a); //imprimindo parametros da função
  console.log("B: "+b);
  console.log("");
  return a - b;
}

console.log("\nParâmetros A e B: \n");
numeros.sort(ordenaNumeros);

console.log("\nArray depois da ordenação: \n");
console.info(numeros)
console.log("\n");


// o sort está comparando todos os itens do array e ele irá ordená-los de acordo com as regras abaixo:
// se o retorno da função for menor que zero, o elemento a virá antes de b
//se o retorno da função for igual a zero, as posições de a e b permanecerão inalteradas
//se o retorno da função for maior que zero, então a virá depois de b