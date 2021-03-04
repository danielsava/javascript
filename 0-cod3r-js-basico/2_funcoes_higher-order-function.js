/**
 * 
 *  Function that operate on other functions,
 *  either by taking them as arguments or by 
 *  returning them, are called 'Higher Order Function'.
 * 
 *  No Javascript, funcões podem ser passada para outras
 *  funcões como argumentos e funções podem retornar outras
 *  funções.
 * 
 * 
 */


function run(fn) {
    fn()
 }

 function sayHello() {
    console.log('Hello Function as Argument´s !!!')
 }

 // Ex 1
 run(sayHello)

 // Ex 2
 run(function() {
    console.log('run !!!')
 })

 // Ex 3
 run(() => console.log('Run Arrow !!!'))



 // Utilziando Currying
  

