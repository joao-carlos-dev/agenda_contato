const form = document.getElementById('form-contato');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContato();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
}

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas; 
        
    }

    function atualizaContato() {
        const contatoFinal = nomeNumeroadd();

        document.getElementById('add-nome').innerHTML = contatoFinal.nome;
        document.getElementById('add-numero').innerHTML = contatoFinal.numero.toFixed(11);
    }

    function nomeNumeroAdd(){
        const nome = nomes[nomes.length - 1];
        const numero = numeros[numeros.length - 1];
        return { nome, numero };
    }

