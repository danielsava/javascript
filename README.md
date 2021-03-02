 # javascript

 "Bem começado, metade feito"

#### "O core do Javascript é função"

No javascript, `funções` é uma das definições mais importante. Javascript é uma linguagem muito focada em função, não por menos até o `Object` é uma função em Javascript:

      $ console.log(typeof Object) # Retorno: function

Diferente de outros linguagens, como no Java, no Javascript funções podem ser atribuídas à variáveis:

      # Ex. 1

      let a = false ? () => console.log('verdadeiro')  : () => console.log('falso')
      a()


      # Ex. 2

      let b = false ? () => { return 'verdadeiro'}  : () => { return 1234 }
      b()      


<br/>

 ### Compatibilidade dos Browsers e Polyfills com ES6

  - https://kangax.github.io/compat-table/es6/
 
 
 <br/>
 
 
 ### Plugin Visual Studio Code
  
  * Plugin: Code Runner 
  * Requisito: Node instalado
  * Atalhos: 
      * Run Code:  `ctrl + alt + n` (executar)
      * Stop Code: `ctrl + alt + m` (stopar)

 <br/>

 ### Comentários
 
 JavaScript aceita as seguintes formas de inserir comentários:

  * `//`: Comentário para uma linha
  * `/* */`: Comentário multilinhas

<br/>

 ### Variáveis
 
 Variáveis em Javascript são criadas através das palavras reservadas: `var`, `let` e `const`.
 
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

 ### Objetos

Abaixo segue exemplo simples de um objeto em Javascript:


    const aluno = { nome: 'José', score: 6.4}
    
    console.log(aluno)
   

    const alunos = [
      { nome: 'José',  score: 6.4},
      { nome: 'Maria', score: 8.6},
      { nome: 'Pedro', score: 9.1},
    ]

    console.log(alunos)  


 <br/>
  
 As boas práticas do JavaScript priorizam o uso de `constantes`. Utilizar `var, let` somente quando realmente
 necessário.
 
 <br/>

 ### Arrays

 Abaixo segue exemplos de `arrays`:
 
    const notas = [6.5, 7.7, 3.2, 8.1, 9.7]
    
    let primeiraNota = notas[0]
    
    let tamanhoArray = notas.length

<br/>

Abaixo alguns exemplos de como `percorrer` arrays:

      const notas = [6.5, 7.7, 3.2, 8.1, 9.7]

      # ex. 1
      for(i = 0; i < notas.length; i++) {
         console.log(notas[i])
      }

      # ex. 2
      for(let n of notas) {
         console.log(n)
      }

      # ex. 3
      notas.forEach(n => console.log(n))

<br/>

### Map, Reduce e Filter em Arrays/Listas

<br/>

- MAP

O `Map` recebe uma função que receberá como parâmetro cada item do array. O `map` irá chamar essa função para cada item do array e criará um novo array, de mesmo tamanho, com o retorno desta função. 

Portanto, a função passada para o `map` receberá os itens do array e o retorno formará um novo array.


Segue exemplos:

    # MAP    
    const numeros = [3, 4, 7, 1, 9, 7] 

    function dobrar(num) {
       return num * 2
    }

    const resultado = numeros.map(dobrar)

    # Utilizando Arrow Functions
    const resultado = numeros.map(numr => numr * 2)


    # Simples com Objetos
    const produtos = [
      {nome: "prod1", preco: 23, desconto: 0.2},
      {nome: "prod1", preco: 120, desconto: 0.3},
      {nome: "prod1", preco: 3500, desconto: 0.5},
      {nome: "prod1", preco: 10, desconto: 0.1},
      {nome: "prod1", preco: 8, desconto: 0.05},
      {nome: "prod6", preco: 1230, desconto: 0.15}
    ]

    function getPrecoComDesconto(produto) {
       return produto.preco * (1 - produto.desconto)
    }

    const precosComDesconto = produtos.map(getPrecoComDesconto)

    # Utilizando Arrow Functions
    const precosComDesconto = produtos.map(p => p.preco * (1 - p.desconto))


<br/>

 - Filter

 O `filter` recebe uma função que receberá como argumento cada item do array. Esta função `deve retornar um boolean`. O `filter` irá filtrar os elementos do array de acordo com o retorno desta função: `true` permanece e `false` retirado.   


    # Filter
    const notas = [7.1, 8.3, 6.3, 7.7, 9.1, 4.3]

    function aprovarNota(nota) {
       return nota >= 7
    }

    const aprovados = notas.filter(aprovarNota)


    # Utilizando Arrow Function
    const aprovarNota = nota => nota >= 7 

    const aprovados = notas.filter(aprovarNota)


    # Ou
    const aprovados = notas.filter(n => n >= 7)


<br/>

 - Reduce

 O `reduce` recebe uma função que conterá dois argumentos: 
 
  - O primeiro argumento é o `acumulador`, ou `acc`: caso não tenha um valor inicial será na primeira iteração com o array o `primeiro elemento` da array. A partir da `segunda iteração`, esse argumento conterá o `retorno desta função`.

  - O segundo elemento são os `próximos elementos do array` que será recebido à cada iteração com o array.

 Um exemplo clássico de `reduce` é a soma:

    # Reduce
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function somar(a, b) {
       return a + b
    }

    const resultado = numeros.reduce(somar)


    # Arrow Function
    const resultado = numeros.reduce( (a, b) => a + b )
    

    # Ou
    const funcaoSomar = (a, b) => a + b
    const resultado = numeros.reduce(funcaoSomar)

<br/>

Utilizando um exemplo um pouco mais complexo para calcular a `média`, utilizando um objeto javascript no acumulador e instanciando este objetos com valores zerados e passando como `valor inicial do acumulador` para o `reduce`:

    # Reduce: média

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function calcularMedia(acc, num) {

       console.log(acc) // Para visualizar a progressao do reduce

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


O `reduce` recebe outros arugmentos, além do acumulador e o elemento. No terceiro argumento ele recebe o `index` do array e no quarto o `próprio array`. Portanto, uma outra formad e calcular a média do exemplo acima seria: 


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


  <br/>

  ### String Template

  Abaixo segue alguns exemplos do uso de `Template String`:

    function enfatizar(texto) {
       return `${texto} !!!`
    }


<br/>


 ### Operadores    

 Existem 3 tipos de operadores: `unários, binários e ternário`.

 #### Unários

Operam em cima de uma única variável. Pode ser `posfix` ou `prefix`:

 - a++ : Operador `posfix` 
 - ++a : Operador `prefix`
  

Abaixo segue alguns exemplos:

      # Posfix
      let a = 1   
      console.log(a++) // Resultado: 1
      console.log(a)   // Resultado: 2

      # Prefix
      let b = 1   
      console.log(++b) // Resultado: 2
      console.log(b)   // Resultado: 2

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
    a += 3        // Forma resumida: a = a + 3
    a *= 7        // a = a * 7
    a -= 2        // a = a - 2
    

<br/>    
    
 Os operadores `relacionais` são: `> < >= <= != == === !==`. Estes operadores sempre retornam `true` ou `false`.

    let a = 3 > 2
    
    console.log(!a) // Resultado: false

<br/>

O Javascript possui dois tipos de operadores relacionais de `igualdade`: Igualdade de Conteúdo `==` e igualdade estrita `===`. Esse último leva em consideração o `tipo` da variável (igualdade ou diferença estrita).

    console.log(2 == 2)          // true
    console.log(2 == '2')        // true
    console.log(2 == '  2   ')   // true
    
    console.log(2 === '2')        // false
    console.log(2 === '  2   ')   // false

    console.log(2 != '2')        // false (2 é igual à 2, independente do tipo)
    console.log(2 !== '2')       // verdadeiro (number é diferente de string)    

<br/>

 Os operadores `lógicos` são: `!`, `!!`, `&&`, `||`.

    let temSol = true
    let temDinheiro = true
    let vouSair = temSol && temDinheiro
    
    console.log(vouSair) // true

<br/>

 Javascript converte `qualquer coisa` para `true` ou `false`:

    if ('teste') { }    // true
    if ('') { }         // false
    if (' ') { }        // true   
    if (!' ') { }       // false
    if (!!' ') { }      // true
    if (!!!' ') { }     // false
  
  
 <br/>    

 #### Ternário

 O operador ternário faz uso do `?` e do `:` que são utilizados para separar as três partes do operador:  `<condicao> ? <true> : <false>`.
    
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


<br/>

### Funções

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

    // Para certificar que o argumento de fato é uma função
    function executar(fn) {
       if(typeof fn === 'function') { 
          fn()
       }
    }


Na última expressão acima, o trecho da condicional if `typeof fn === 'function'` é o mesmo que `typeof(fn) === 'function'`. Isso porque o retorno da expressão `typeof(fn)` é uma string igual à `function` caso o argumento `fn` realmente seja uma função.
   
<br/>

Em JavaScript existem várias formas de declarar uma função: `Function Declaration`, `Function Expression`, `Função Anônima` e `Arrow Function`:


    // Function Declararion
    function multiplicar(a = 0, b = 0) {
       return a * b
    }
    console.log('Resultado: ' + multiplicar(3, 9))


    // Function Expression 
    const funcaoMultiplicar = function multiplicar(a, b) {  
       return a + b 
    }
    console.log('Resultado: ' + funcaoMultiplicar(3, 9))
    
    
    // Função Anônima
    const funcaoMultiplicar = function (a, b) {  
       return a + b 
    }
    console.log('Resultado: ' + funcaoMultiplicar(3, 9))


    // Arrow Function
    const funcaoMultiplicar = (a, b) => a * b 
    console.log('Resultado: ' + funcaoMultiplicar(3, 9))


Nos exemplos acima, em `Function Expression` foi utilizada uma função anônima (não possui nome) por questões de praticidade. Poderia ser dado qualquer nome à função, mas para executar ela deve ser chamada somente pelo nome da varíavel a qual foi atribuída. 

<br/>

### Spread/Rest

O operador `spread` é utilizado através do uso da anotação `'...'` antes da declaração do argumento. Isso significa que a função pode receber uma quantidade variável de argumentos. O `spread` transforma o argumento em um `array`. Abaixo segue exemplo:


      function logNums(... nums) {

         console.log('Spred é um array: ', Array.isArray(nums))

         console.log(nums)

         for(let n of nums)
            console.log(n)

      }

      logNums(1)
      logNums(1, 2, 3)
      logNums(1, 2, 3, 4, 5)


<br/>

### JavaScript is 'First Class Function'

A programming language is said to have First-Class Functions when functions in 
that language are treated like `any other variable`.
 
Este conceito é fundamental da `programação funcional`. E podemos classificar o Javascript como uma linguagem de programação First Class Function pois podemos, em resumo, atribuir funções à variáveis através das `Functions Expression`:


      /* Function Expression */
      const func1 = function funcaoQualquer(a, b) { return a + b }
      let resultado1 = func1(1, 2)
      console.log(resultado1)

      /* Function Expression: neste caso utilizando Função Anônima */
      const func2 = function (a, b) { return a + b }
      let resultado2 = func1(2, 3)
      console.log(resultado2)

      /* Function Expression: neste caso utilizando Arrow Function */
      const func3 = (a, b) =>  a + b
      let resultado3 = func1(3, 4)
      console.log(resultado3)

<br/>

### Higher Order Function

Function that operate on other functions, either by taking them as arguments or by returning them, are called 'Higher Order Function'.

No Javascript, funcões podem ser passada para outras funcões como argumentos e funções podem retornar outras funções:


      function run(fn) {
         fn()
      }

      function sayHello() {
         console.log('Hello Function as Argument´s !!!')
      }

      run(sayHello)

      run(function() {
         console.log('run !!!')
      })

      run(() => console.log('Run Arrow !!!'))

<br/>

### Higher Order Function e Currying


Outro exemplo, neste caso utilizando `Higher Order Function` com ['Currying'](https://rodrigorgs.github.io/aulas/mata56/aula14-currying):


      // Normal, sem 'Currying'
      function finalPrice(tax, price) {
         return price * (1 + tax)
      }


      // Currying
      functio finalPrice(tax) {
         return function(price) {
            return price * (1 + tax)
         }
      }

      // Executando 
      const preco1 = finalPrice(0.0875)(25)
      const preco2 = finalPrice(0.0875)(50)
      const preco3 = finalPrice(0.0875)(100)


      // Vantagens do Currying
      const nycFinalPrice = finalPrice(0.0875)

      const preco1 = nycFinalPrice(25)
      const preco2 = nycFinalPrice(50)
      const preco3 = nycFinalPrice(100)


<br/>

### Desafio: Função Range

Função que imprime um intervalor de numeros, crescente ou descrente, com saltos pré-definidos:

      function range(a, b, c) {

         const r = []

         if(a === undefined)
            return r

         if(c === undefined) // Pode ser substituído atribuindo valor default no argumento da função
            c = 1;

         const valorInicial = b === undefined ? 1 : a;
         const valorFinal = b === undefined ? a : b;
         var salto = valorInicial <= valorFinal ? Math.abs(c) : -Math.abs(c);

         const isCrescente = salto >= 0

         console.log('Inicio', valorInicial)
         console.log('Final', valorFinal)
         console.log('Salto', salto)
         console.log('isCrescente', isCrescente)

         for(let i = valorInicial; isCrescente ? i <= valorFinal : i >= valorFinal; i+=salto)
            r.push(i)

         return r

      }

      console.log(range(5))
      console.log(range(5, 10))
      console.log(range(5, 10, 2))
      console.log(range(10, -5, 3))


<br/>

### Composição de Funções

<br/>
    
 Abaixos segue um exemplo mais simples de composição de funções.
    
    function composicao(fn1, fn2, fn3, valor) {
       return fn3(fn2(fn1(valor)))               
    }

    function gritar(texto) {
       return texto.toUpperCase()
    }

    function enfatizar(texto) {
       return `${texto} !!!`
    }

    function separar(texto) {
       retrun texto.split('').join(' ')
    }

    // Chamando a função que faz uso da Composição de Funções
    const resultado = composicao(gritar, enfatizar, separar, 'cuidado com o buraco')

    // Visualizando o Resultado    
    console.log(resultado)

<br/>

Alterando um pouco o exemplo acima para fazer uso do recurso `Currying`:

    function composicao(fn1, fn2, fn3) {
      return function (valor) {
         return fn3(fn2(fn1(valor)))
      }
    }

    function gritar(texto) {
       return texto.toUpperCase()
    }

    function enfatizar(texto) {
       return `${texto} !!!`
    }

    function separar(texto) {
       retrun texto.split('').join(' ')
    }

    // Com o uso do `Currying`, a chamada pode ser feita da seguinte maneira:

    const resultado = composicao(gritar, enfatizar, separar)('cuidado com o buraco')

    console.log(resultado)


    // Dessa forma, temos vários possibilidades de chamar a função `composicao`

    const exagerar = composicao(gritar, enfatizar, separar)

    const resultado1 = exagerado('cuidado com o buraco')
    const resultado2 = exagerado('pára')

    console.log(resultado1)
    console.log(resultado2)


<br/>

### Prototype: estendendo as funcionalidades das classes JavaScript

Com o uso de `prototypes` podemos estender, ou criar novas, funcionalidades para as classes Javascript.

No exemplo abaixo, vamos estender as funcionalidades da Classe `Array`, criando um método novo, que irá imprimir sempre o primeiro elemento (`logFirst`), e re-escrevendo nossos métodos de `map`, `filter` e `reduce`:

 - OBS: Em virtude do escopo das `Arrow Function` não abranger o `'this'`, é melhor utilizar `funções declarativas` com prototypes.

Segue:

      const produtos = [
         {nome: 'Caneta', qtde: 10, preco: 7.99},
         {nome: 'Impressora', qtde: 0, preco: 549.50},
         {nome: 'Caderno', qtde: 10, preco: 27.10},
         {nome: 'Lapis', qtde: 10, preco: 5.82},
         {nome: 'Tesoura', qtde: 10, preco: 19.20}
      ]


      // 'logFirst()': imprime no console o primeiro elemento da array.
      Array.prototype.logFirst = function() {
         if(this.length > 0)
            console.log(this[0])
      }

      produtos.logFirst() // Saída: { nome: 'Caneta', qtde: 10, preco: 7.99 }


      // Filter
      Array.prototype.meuFilter = function(fn) {

         if(typeof fn !== 'function') 
            throw 'Não é uma função'

         const resultado = []

         for(let item of this) {
            if(fn(item))
               resultado.push(item)
         }

         return resultado

      }

      const filtrados = produtos.meuFilter( i => i.preco > 8)
      console.log(filtrados)


      // Map
      Array.prototype.meuMap = function(fn) {

         if(typeof fn !== 'function')
            throw 'Não é uma função'

         const resultado = []

         for(let item of this)
            resultado.push(fn(item))

         return resultado

      }

      const resultado = produtos.meuMap(i => i.nome)
      console.log(resultado)


      // Reduce
      Array.prototype.meuReduce = function(fn, valorInicial) {

         if(typeof fn !== 'function')
            throw 'Não é uma função'

         let acumulado = undefined

         if(valorInicial !== undefined) {
            acumulado = valorInicial
         } else {
            acumulado = this[0]
            var pularPrimeiroItem = true
         }
            
         for(let i of this) {

            if(pularPrimeiroItem) {
               pularPrimeiroItem = false;
               continue;
            }
            acumulado = fn(acumulado, i)
            
         }
         
         return acumulado

      }

      const numeros = [1, 2, 3, 4]

      const soma = numeros.meuReduce((acc, i) => acc + i, 0)

      console.log(soma)


      // Utilizando todos o métodos criados no prototype do Array
      const r = produtos
         .meuFilter(i => i.qtde > 0)
         .meuMap(i => i.qtde)
         .meuReduce((a, b) => a + b)

      console.log(r) 


<br/>

### Obsever: Padrão de Projeto

O `Observer` é um dos padrões de projeto mais utilizado na Web. Atualmente, a plataforma de desenvolvido web é o Javascript. E o Javascript é uma linguagem fortemente baseada no padrão `Observer`. 

 No Javascript, além do RxJS, o padrão `Observer` é normalmente referido como `Event Handler`, enquanto no `Java` é utilizado o termo `Listener`. Apesar das nomenclaturas distintas, eles representam o mesmo padrão: `Observer`.

 Referências:
 
 - Video: [O Padrão de Projeto Mais Utilizado da Web](https://www.youtube.com/watch?v=REqVImw8Wgo&t=0s)
 - Video: [Elementos do Angular #02 [2020]](https://www.youtube.com/watch?v=LjNS1BgyEf4&t=0s) 

 asdf

