const produtos = [
   {nome: 'Caneta', qtde: 10, preco: 7.99},
   {nome: 'Impressora', qtde: 0, preco: 549.50},
   {nome: 'Caderno', qtde: 10, preco: 27.10},
   {nome: 'Lapis', qtde: 10, preco: 5.82},
   {nome: 'Tesoura', qtde: 10, preco: 19.20}
]


// logFirst(): imprime no console sempre o primeiro elemento da array.

Array.prototype.logFirst = function() {
   if(this.length > 0)
      console.log(this[0])
}


// Filter
Array.prototype.meuFilter = function(fn) {

   if(typeof fn !== 'function')
      throw 'Não é uma função'

   const resultado = []

   for(let item of this) {
      if(fn(item))
         resultado.push(item)
   }

   return resultado

}


// Map
Array.prototype.meuMap = function(fn) {

   if(typeof fn !== 'function')
      throw 'Não é uma função'

   const resultado = []

   for(let item of this)
      resultado.push(fn(item))

   return resultado

}

const resultado = produtos.meuMap(i => i.nome)


// Reduce
Array.prototype.meuReduce = function(fn, valorInicial) {


   if(typeof fn !== 'function')
      throw 'Não é uma função'

   let acumulado

   if(valorInicial !== undefined) {
      acumulado = valorInicial
   } else {
      acumulado = this[0]
      var pularPrimeiroItem = true
   }
      
   for(let i of this) {

      if(pularPrimeiroItem) {
         pularPrimeiroItem = false;
         continue;
      }
      acumulado = fn(acumulado, i)
      
   }
   
   return acumulado

}

const numeros = [1, 2, 3, 4]

const soma = numeros.meuReduce((acc, i) => acc + i, 0)

console.log(soma)


// Utilizando todos o métodos criados no prototype do Array
const r = produtos
   .meuFilter(i => i.qtde > 0)
   .meuMap(i => i.qtde)
   .meuReduce((a, b) => a + b)

console.log(r)