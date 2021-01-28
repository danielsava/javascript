function soma(a = 1, b = 1) {
    console.log('Resultado Soma: ' + (a + b))
}

function executar(fn) {
    if(fn === 'function') {
        fn()
    }
}


console.log('Soma:')
soma()

console.log('\nExecutar:')
executar(soma)

//console.log('\nExecutar2:')
//executar('function')
