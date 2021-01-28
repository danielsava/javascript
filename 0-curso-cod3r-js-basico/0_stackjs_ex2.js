console.log('#01')
function esperarPor(tempo) {
    const futuro = Date.now() + tempo
    while( Date.now() < futuro ) {  }
}

console.log('#02')
setTimeout( () => console.log('Exec #01'), 5000)
setTimeout( () => {
    esperarPor(3000)
    console.log('Exec #02')
}, 1000) // Tem prioridade MAIOR, no 'Event Queue', por ter um tempo de espera menor, por isso será executado primeiro

console.log('#03')
esperarPor(10000)

console.log('#04')
console.log('Finalizado')