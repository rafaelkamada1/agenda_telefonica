const form = document.getElementById('form-info');
let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-pessoa');
    const inputNumero = document.getElementById('numero-pessoa');
    
    const nome = inputNome.value;
    const numero = inputNumero.value;

    if(nome && numero) {

    linhas += `<tr><td>${nome}</td><td>${numero}</td></tr>`;

    inputNome.value = ''; 
    inputNumero.value = '';  
    } else {
        alert('Por favor, preencha todos os campos antes de adicionar à tabela');
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('#tabela-corpo');
    corpoTabela.innerHTML = linhas;
}