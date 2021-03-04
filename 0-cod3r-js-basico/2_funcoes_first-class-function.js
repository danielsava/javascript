/**
 * 
 *      A programming language is said to have
 *      First-Class Functions when functions in 
 *      that language are treated like 
 *      ANY OTHER VARIABLE.
 * 
 *      Este conceito é fundamental para programação funcional. 
 * 
 *      E podemos classificar o Javascript como uma linguagem de
 *      programação First Class Function pois podemos, em resumo, 
 *      atribuir funções à variáveis através das FUNCTIONS EXPRESSION
 * 
 * 
 */

// Function Expression
const func1 = function funcaoQualquer(a, b) { return a + b }
let resultado1 = func1(1, 2)
console.log(resultado1)

// Function Expression: neste caso utilizando Função Anônima 
const func2 = function (a, b) { return a + b }
let resultado2 = func1(2, 3)
console.log(resultado2)

// Function Expression: neste caso utilizando Arrow Function 
const func3 = (a, b) =>  a + b
let resultado3 = func1(3, 4)
console.log(resultado3)



  

