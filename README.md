 # javascript

 "Bem começado, metade feito"

 Compatibilidade dos Browsers e Polyfills com ES6
  - https://kangax.github.io/compat-table/es6/
 
 
 <br/>
 
 
 ### Plugin Visual Studio Code
 
  * Plugin: Code Runner 
  * Requisito: Node instalado
  * Atalho execução: `ctrl + alt + n`

 
 ### Comentários
 
 JavaScript aceita as seguintes formas de inserir comentários:

  * `//`: Comentário para uma linha
  * `/* */`: Comentário multilinhas


 ### Variáveis
 
 Variáveis em Javascript são criadas através das palavras reservadas: `var, let e const`.
 
 Os valores das `const` não podem ser alteradas. Javascript é uma linguagem de tipos dinâmicos, por isso 
 o tipo das variáveis são atribuídas em execução de acordo com o conteúdo atribuído. Em Javascript `funções` podem ser
 atribuídas às variáveis.
  
    var a = 1
    let b = 2
    const c = a + b
    
    console.log(c) // resultado: 3
    
    a = 'Teste ' 
    const d = a + b
    
    console.log(d) // resultado: Teste 2
    
 <br/>
  
 As boas práticas do JavaScript priorizam o uso de `constantes`. Utilizar `var, let` somente quando realmente
 necessário.
 
 <br/>
 
 Abaixo segue exemplos de `arrays`:
 
    const notas = [6.5, 7.7, 3.2, 8.1, 9.7]
    
    let primeiraNota = notas[0]
    
    let tamanhoArray = notas.length
    
 
 ### Operadores    

 Existem 3 tipos de operadores: `unários, binários e ternário`.

 #### Unários

 Operam em cima de uma única variável.

    let a = 3
    
    a++   // operador `posfix` 
    ++a   // operador `prefix`
    
    console.log(a) // Resultado: 5

 <br/>    

 #### Binário

 Operadores binários trabalham com dois operandos. Para esta classe, existem os seguintes operadores: `aritméticos, relacionais, 
 lógicos, atribuição `.

    // Aritméticos
    
    let a = 2 + 3 // Infix (entre os operandos)
    let b = 2 - 3 
    let c = 2 * 3 
    let d = 2 / 3 
    let e = 2 % 3 // resto da divisão 
    
    
    // Atribuição
    
    let a = 3
    a += 3 // Forma resumida: a = a + 3
    a *= 7 // a = a * 7
    a -= 2 // a = a - 2
    // Da mesma forma segue para os outros operadores aritméticos

<br/>    
    
 Os operadores `relacionais` são: `> < >= <= != == === !==`. Estes operadores sempre retornam `true` ou `false`.

    let a = 3 > 2
    
    console.log(!a) // Resultado: false

<br/>

O Javascript possui dois tipos de operadores relacionais de `igualdade`: `==` e `===`. Esse último leva em consideração o `tipo` da variável (igualdade ou diferença estrita).

    console.log(2 == 2)          // true
    console.log(2 == '2')        // true
    console.log(2 == '  2   ')   // true
    
    console.log(2 === '2')        // false
    console.log(2 === '  2   ')   // false

    console.log(2 != '2')        // false (2 é igual à 2, independente do tipo)
    console.log(2 !== '2')       // verdadeiro (number é diferente de string)    

<br/>

 Os operadores `lógicos` são: `! !! && ||`.

    let temSol = true
    let temDinheiro = true
    let vouSair = temSol && temDinheiro
    
    console.log(vouSair) // true

<br/>

 Javascript converte ´qualquer coisa´para `true` ou `false`:

    if ('teste') { }    // true
    if ('') { }         // false
    if (' ') { }        // true   
    if (!!' ') { }      // true
  
  
 <br/>    

 #### Ternário

 O operador ternário faz uso do `?` e do `:` que são utilizados para separar as três partes do operador: 
 `<condicao> ? <true> : <false>`.
    
    let temSol = true
    let temDinheiro = true
    let vouSair = temSol && temDinheiro

    let resultado = vouSair ? '#partiu' : 'Fique queto em casa' // Operador Ternário

    console.log(resultado)
    
    
 <br/>
 
 ### Estruturas de Controle
 
 Exemplo `if`:
 
    let nota = 8.3
    let temBomComportamento = true 
       
    if (nota >= 9 && temBomComportamento) {
        console.log('Quadro de Honra')
    } else if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Recuperação')
    }
 
 <br/>
 
 Exemplo `for`:
 
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    
    for (let i = 0; i <= 100; i += 10) {
        console.log(i)
    }
    
    const notas = [6.5, 7.7, 3.2, 8.1, 9.7]
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i])                   // imprime as notas
    }
    
    for (let nota of notas) {
       console.log(nota)
    }

    notas.forEach(nota => console.log(nota))

    
### Estruturas de Controle

Função é o recurso mais importante da linguagem Javascript. Quase tudo, senão tudo, no JavaScript é uma função.


    function soma(a, b) {
      console.log(a + b)
    }


    soma(3, 4)             // Resultado: 3 + 4 = 7

    soma(3, 4, 5, 6, 10)   // Resultado: 3 + 4 = 7

    soma(3)                // Resultado: 3 + undefined = NaN (Not a Number) --> Mas não gera Exception/Erro

    soma()                 // Resultado: undefined + undefined = NaN --> Também não gera erro.

    soma('Teste ', 2)      // Resultado: Teste 2


    // Uma forma de tratar os 'undefined'
    function soma2(a, b) {
       if(b == undefined) {
          b = 10
       }
       console.log(a + b)
    }

    // Outra forma de tratar os 'undefined'. Javascript trata os `undefined` como 'false'.
    function soma3(a, b) {
       if(b) {
          b = 10
       }
       console.log(a + b)
    }

    // Ou:
    function soma3(a, b) {
       console.log(a + (b || 10))
    }


OBSERVAÇÃO: Nesta duas últimas formas, mostradas no exemplo acima, temos um `bug` pois Javascript resolve o numeral `0` (zero) para `false`. Portanto a chamada da função com `soma(3, 0)` resultaria, nos caso dos exemplos acima, em `13` em vez de `3` (valor correto). 

Portanto, uma das formas de resolver o problema supracitado seria utilizar valores `padrão` para os argumentos:

    function soma(a = 1, b = 0) {
       console.log(a + b)
    }


Javascript também suporta inserir uma `função` como argumento de funções:


    function executar(fn) {
       fn()
    }

    // Para certificar que realmente é uma função
    function executar(fn) {
       if(fn === 'function') {
          fn()
       }
    }