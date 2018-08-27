/**
 *
 * Este código não apresenta nenhum padrão de desenvolvimento, como por exemplo o padrão MVC.
 *
 * Por isso ele é pouco legível. Não está claro quais são as regras de negócio, a view é alterada de forma 'direta'
 * os dados de negócio não estão claros (objetos) e etc.
 *
 *
 */


// lib.dom.d.ts -> pacote padrão do JavaScript

var campos = [                                                                      // buscando elementos no DOM pelo ID
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {       // Buscando elementos pela classe css, e adicionando um evento

    event.preventDefault();                                                         // Por padrão, quando um formulário é submetido logo após é feito um refresh. Com este comando, este refresh será evitado

    var tr = document.createElement('tr');                                          // Linha que será adicionada na Tabela

    campos.forEach(function (campo) {                                               // Cria uma coluna para cada campo do formulario, e adiciona na linha 'tr' acima
        var td = document.createElement('td');                                      // Cria a coluna
        td.textContent =  campo.value;
        tr.appendChild(td);                                                         // Adiciona a coluna à linha
    })

    var campoQtd = campos[1];                                                       //
    var campoVlr = campos[2];                                                       //

    var tdVolume = document.createElement('td');                                    // Cria a coluna Volume
    tdVolume.textContent = campoQtd.value * campoVlr.value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    resetarCampos();

    focoCampoData();

});

function focoCampoData() {
    campos[0].focus();
}

function resetarCampos() {
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
}
