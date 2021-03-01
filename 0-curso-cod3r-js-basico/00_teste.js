
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