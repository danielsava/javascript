
function fn5() {
    console.log("fn5: start")
    console.log("fn5: end")
}

function fn4() {
    console.log("fn4: start")
    fn5()
    console.log("fn4: end")
}

function fn3() {
    console.log("fn3: start")
    setTimeout( () => fn4(), 3000)
    console.log("fn3: end")
}

function fn2() {
    console.log("fn2: start")
    fn3()
    console.log("fn2: end")
}

function fn1() {
    console.log("fn1: start")
    fn2()
    console.log("fn1: end")
}

function main() {
    console.log("main: start")
    fn1()
    console.log("main: end")
}

main()

console.log("finalizado")