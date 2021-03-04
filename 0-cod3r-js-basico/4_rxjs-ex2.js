
/**
 *  Este exemplo cria um Observer
 *  através do comando 'create' do RxJs
 * 
 */

 const { Observable } = require("rxjs")


 /* Criando os Observables */

 // Ex1
 const obs1 = Observable.create(subscriber => {

    subscriber.next('1: Obs1')
    subscriber.next('1: foi')
    subscriber.next('1: criado')
    subscriber.next('1: e')
    subscriber.next('1: finalizado')

    subscriber.complete()
 })


 // Ex2
 const obs2 = Observable.create(subscriber => {

    subscriber.next('2: Obs2')
    subscriber.next('2: foi')
    subscriber.next('2: criado')
    subscriber.next('2: e')

    setTimeout(() => {
        subscriber.next('2: finalizado depois de 3 seg')
        subscriber.complete() // O 'complete' deve estar dentro do timeout, senão ele será executado antes do timeout e encerrará o fluxo antes deste último 'next'
    }, 3000)
    
 })

 // Ex3
 const obs3 = Observable.create(subscriber => {

    subscriber.next('3: Obs3')
    subscriber.next('3: foi')
    subscriber.next('3: criado')
    subscriber.next('3: e')

    if(Math.random() > 0.5) {
        subscriber.next('3: finalizado com sucesso')
        subscriber.complete();
    } else {
        subscriber.next('3: finalizado com erro')
        throw 'Erro no Observable 3'
    }
    
 })



 /** 
  * Executando os Observables
  * O 'subscribe' pode receber até 3 argumentos:
  *    1° - Um método que será executado à cada 'next()' do Observable. Este método recebe como argumento o mesmo argumento passado para o 'next()'
  *    2° - Um método que será executado caso de erro (Exception). Receber como argumento a exception lançada dentro do Observable
  *    3° - Um método que será executado  após o 'complete()' dentro do observable. Ou seja, quando o Observable finalizar.
  *         Este método não é executado em caso de erro e caso exista o método do item '2'
  * 
  */

 //obs1.subscribe(texto => console.log(texto))
 //obs2.subscribe(texto => console.log(texto))
 obs3.subscribe(
     texto => console.log(texto),
     err => console.log(err),
     () => console.log('Fim')
)