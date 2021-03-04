/**
 *  Este exemplo utiliza Observables do RxJS, 
 *  neste caso o operador 'interval'
 * 
 */


const { interval } = require("rxjs")


// Gera um Observer
const obs$ = interval(1000)

// O subscribe retorna uma subscription
const sub1 = obs$.subscribe(n => { 
    console.log('F1', n) 
})

const sub2 = obs$.subscribe( n => {
    console.log('F2', n)
})

setTimeout(() => {
    sub1.unsubscribe()
}, 6000)

setTimeout(() => {
    sub2.unsubscribe()
}, 8000)