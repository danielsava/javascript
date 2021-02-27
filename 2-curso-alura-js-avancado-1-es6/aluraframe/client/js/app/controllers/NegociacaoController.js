class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }


    adiciona(event) {

        event.preventDefault();

        let data = this._inputData.value

        console.log(data);

        console.log(data.split('-'))

        let negociacao = new Negociacao(
            new Date(data.split('-')),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

    }

}