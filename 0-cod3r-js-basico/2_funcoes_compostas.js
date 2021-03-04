function composicao(fn1, fn2, fn3, valor) {
    return function(valor) {
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
    return texto.split('').join(' ')
}

const exagerar = composicao(gritar, enfatizar, separar)


const resultado1 = exagerar('cuidado com o buraco')
console.log(resultado1)

const resultado2 = exagerar('pára')
console.log(resultado2)