

var n1 = new Negociacao();
n1._quantidade =  100;
n1._valor = 50.0;
console.log(n1);

var n2 = new Negociacao();
n2._quantidade = 200;
console.log(n2);

var n3 = new Negociacao(new Date(), 300, 50.0);
console.log(n3);

console.log("Volume de n3: " + n3.getVolume());

console.log("Acessando atributo quantidade com o novo 'get': " + n3.quantidade);


