function fn5() {
    console.log('fn5: inicio')
    console.log('fn5: fim')    
}

function fn4() {
    console.log('fn4: inicio')
    fn5()
    console.log('fn4: fim')    
}

function fn3() {
    console.log('fn3: inicio')
    setTimeout(() => fn4(), 5000)
    console.log('fn3: fim')    
}

function fn2() {
    console.log('fn2: inicio')
    fn3()
    console.log('fn2: fim')
}

function fn1() {
    console.log('fn1: inicio')
    fn2()
    console.log('fn1: fim')
}


function main() {
    console.log('main: inicio')
    fn1()
    console.log('main: fim')    
}

console.log('principal: inicio')
main()
console.log('principal: fim')