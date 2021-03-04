const numrs = [1, 2, 3, 4, 5, 6]

      const calcularMedia = (acc, el, index, array) => {

      let resultado = {
         soma: acc.soma + el,
         qtde: ++acc.qtde,
         media: 0
      }

      resultado.media = resultado.soma / resultado.qtde

      console.log(`Laço ${index}`, resultado)
      console.log(`Array`, array)

      return resultado

   }

   const resultado = numrs.reduce(calcularMedia, {soma: 0, qtde: 0, media: 0})

   console.log('Média: ', resultado.media)