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

   const resultado = []

   if(typeof fn !== 'function') 
      throw  'Não é uma função'

   for(item of this) {
      if(fn(item))
         resultado.push(item)
   }

   return resultado

}


// Map
Array.prototype.meuMap = function(fn) {

   const resultado = []
   
   if(typeof fn !== 'function')
      throw 'Não é uma função'

   for(item of this)
      resultado.push(fn(item))

   return resultado

}


const resultado = produtos.meuMap(i => i.nome)

console.log(resultado)


