class Negociacao {

    /* Classes JavaScritp pode ter somente 1 construtor
    constructor() {
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }
    */

    constructor(data, quantidade, valor) {


        /*  O JavaScript, ate o momento (ES6), não possui modificadores de acesso para atributos.
         *  Por causa disso, foi feito uma convenção (gambiarra) que apenas sinaliza que o atributo que começa com
         *  com underline "_" é PRIVATE.
         *
         *  Lembrando que é uma convenção, e que não impede que os atributos sejam acessados diretamente. O uso do
         *  underline "_" é apenas informativo, para sinalizar para o desenvolvedor que é um atributo PRIVADO e que
         *  deve ser utilizado os métodos 'get/set' do atributo.
         *
         *
         */

        //this._data = data;
        this._data = new Date(data.getTime()); // Gambiarra da programação defensiva.
        this._quantidade = quantidade;
        this._valor = valor;


        /*
            Tornando os ATRIBUTOS do objeto congelado (imutável). Mas isso se aplica somente aos atributos desta classe.
         *  Isso significa que não posso alterar a data informando outra data (n1.data = new Date()), mas posso alterar
         *  a data acessando um método Date, ex.: n1.data.setDate(11), desta forma altera o dia da data para '11'.
         *
         *
         */
        Object.freeze(this);

    }


    constructor()

    /* Em substituição aos 'get' convencionais getData(), podem ser utilizado as sintaxes abaixo. Dessa forma,
    *  os atributos podem ser acessados da forma 'n1.data' ou 'n1.quantidade'.
    *
    */
    get data() {
        //return this._data;
        return new Date(this._data.getTime()); // programação 'defensiva' (gambiarra) para não alterar a data atraves dos métodos do Date().
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}