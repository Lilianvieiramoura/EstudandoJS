const jogos = [
  { id: 1, nome: 'Galaxian', anoLancamento: 1979},
  { id: 2, nome: 'Donkey Kong', anoLancamento: 1981},
  { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981},
  { id: 4, nome: 'Asteroids', anoLancamento: 1979}
];

function retornaNomeJogos(nomes, jogo) { // a redução do array a um unico valor é feita através de uma função. Para cada elemento do array ,recebe dois parametros: nomes -> valor que está sendo concatenado, jogo ->elemento do array que está sendo iterado
  return nomes + jogo.nome + ', '; // retorna o novo valor que será concatenado na proxima vez que a função for chamada
}

const nomeJogos = jogos.reduce(retornaNomeJogos, ''); //usamos a funcao reduce para concatenar os nomes dos jogos do array jogos. lembrando que inicializamos o valor que será incfrementado quando passamos o segundo parametro da função reduce.

console.log(nomeJogos.slice(0, -2));
