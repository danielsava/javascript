/**
 *   Criando um Operador 'from' com RxJs
 * 
 */


const { Observable, noop } = require("rxjs")


// Função que funcionará como o operador 'from' do RxJs

function fromArray(array) {

    return Observable.create(subscriber => {
        for(let item of array)
            subscriber.next(item)
        subscriber.complete()
    })

}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

fromArray(numeros)
    .subscribe( 
        n => console.log(n),  
        noop,                           // Utilitário do RxJs para 'sem operacao'. É um função vazia que retorna 'void'. 
        () => console.log('Finalizado !!!')
    )



