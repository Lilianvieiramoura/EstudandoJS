const produtosCadastrados = [
  {id: 1, nome: 'Açúcar', estoque: 100, valor: 2.00},
  {id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95},
  {id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50}
];

function retornaProduto(produto) { // a função retorna um objeto com apenas o nome e o valor do produto
  const produtoExibicao = {
    nome: produto.nome,
    valor: produto.valor
  }

  return produtoExibicao;
}

const produtosExibicao = produtosCadastrados.map(retornaProduto); //reeeeeetornaProduto = executando a função para cada elementos do array produtosCadastrados
console.log(produtosExibicao); //criamos um novo array porém que só possui o nome e o valor de cada produto.
