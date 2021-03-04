/**
 *   Criando um 'cliente HTTP' parecido com o HTTP Client do Angular 
 *   que também utilizada RxJs e Observables pode debaixo dos panos
 * 
 */

const { Observable } = require("rxjs")
const { map } = require("rxjs/operators")
const axios = require("axios")


function httpGet(url) {

    return Observable.create(function (subscriber) {

        axios.get(url)
            .then(resp => {
                const dados = resp.data
                if(Array.isArray(dados)) 
                    dados.forEach(i => subscriber.next(i))
                else
                    subscriber.next(dados)
            })
            .then(() => subscriber.complete())

    })

}



const consultarFilmsObserver$ =  httpGet("http://localhost:3001/films")

// Imprimindo todos os filmes
//consultarFilmsObserver$.subscribe( film => console.log(film))

// Imprimindo somente os Títulos
consultarFilmsObserver$
    .pipe( map( film => film.Title) )
    .subscribe( title => console.log(title))



// Filtrando os atores (que é um atributo string com os nomes dos autores separados por vírgula) e transformando em um array.

consultarFilmsObserver$
    .pipe( 
        map(film => film.Actors),                        // Filtra somente os Atores
        map(actorsString => actorsString.split(',')),    // Converte a string em um array
        map(atores => atores.map(i => i.trim()) )       // Aplica um 'trim()' em cada elemento da lista de atores
    )                           
    .subscribe( atores => console.log(atores))