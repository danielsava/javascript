/**
 *   Exemplo com uso do Operador de Criação ('from') e
 *   Operadores de Transformação ('pipe', 'map') do RxJs
 * 
 */

 const { from } = require("rxjs")
 const { map }  = require("rxjs/operators")



 const notas = [6.7, 6.1, 7.5, 4.9, 9.8, 7]


// Ex.1 : Cria um Observer e armazena na variável 'obs$'
 const obs$ = from(notas)
 obs$.subscribe(nota => {
     console.log('ex1', nota)
 })
 console.log('')


 // Ex.2 : Em vez de salvar o Observer numa variável, as chamadas podem ser encadeadas
 from(notas)
    .subscribe( nota => console.log('ex2', nota) )
console.log('')


 // Ex.3 : Uso do Pipe
 from(notas)
    .pipe(
        map(nota => nota >= 7 ? 'aprovado' : 'reprovado'),
    )
    .subscribe(
        status => console.log('ex3', status)
    )
 console.log('')


 // Ex.4 : Pipe
 from(notas)
    .pipe(
        map(nota => nota >= 7 ? 'aprovado' : 'reprovado'),
        map(status => status[0])                                // Pega somente a primeira leta do status (aprovado ou reprovado)
    )
    .subscribe(
        status => console.log('ex4', status)
    )
 console.log('')


 // Ex.5 : Outra forma de escrever o Ex 4
 from(notas)
    .pipe( map(nota => nota >= 7 ? 'aprovado' : 'reprovado') )
    .pipe( map(status => status[0]) )
    .subscribe(
        status => console.log('ex4', status)
    )
 console.log('')


 