let produtos = ['Arroz', 'feijão', 'leite'];
var codigos = Array(10,20,30);
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

// ADICIONAR elemento no array no final
produtos.push("Açucar");

// adiciona no início do aray
produtos.unshift("óleo");

produtos.push("café");

// remove elemento do final
produtos.pop();

//remove do início
produtos.shift()

//adiciona todo array em outro com o operador spread ...

let maisProdutos = [...produtos, 'biscoito', 'água']

console.log(produtos);

// remover elementos em posição específica
console.log(maisProdutos);

maisProdutos.splice(0,2);

console.log(maisProdutos);

// copiar elementos em posição específica
console.log(maisProdutos);

maisProdutos = produtos.slice(0,2);

console.log(maisProdutos);

