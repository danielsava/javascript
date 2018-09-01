class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }


    adiciona(event) {

        event.preventDefault();

        console.log(typeof(this._inputData.value));

        let negociacao = new Negociacao(
            new Date(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

        console.log(typeof(event));

    }

}