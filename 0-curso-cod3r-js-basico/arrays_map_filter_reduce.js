const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function calcularMedia(acc, num) {

   const novoTotal = acc.total + num
   const novaQtde = acc.qtde + 1

   return {
      total: novoTotal,
      qtde: novaQtde,
      media: novoTotal / novaQtde
   }

}

const valorInicial = {total: 0, qtde: 0, media: 0}

const resultado = numeros.reduce(calcularMedia, valorInicial)

const mediaCalculada = resultado.media

console.log(resultado)
console.log("Média: " + mediaCalculada)
