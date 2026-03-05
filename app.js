'use strict'
// objeto produto
const produto = {
    nome: [],
    codigo: [],
    quantidade: []
}

// adiciona produto na tabela
function adicionarProduto(){
    const inputProduto = document.getElementById('input-produto')
    const inputCodigo = document.getElementById('input-codigo')
    const inputQuant = document.getElementById('input-quant')
    const produtosContainer = document.getElementById('produtos-container')

    // validação de campos vazios
    if(inputProduto.value == '' || inputCodigo.value == '' || inputQuant.value == ''){
        alert('ERRO! Os campos não podem estar vazios');
        inputCodigo.focus()

    // valida se o código informado ja esta no objeto produto 
    }else if(produto.codigo.includes(inputCodigo.value)){
        alert('ERRO! Código ja informado!')
        inputCodigo.focus()
    }else{
        // escreve a tabela e  o objeto
        escreverTabela(inputCodigo.value ,inputProduto.value,inputQuant.value, produtosContainer)
        adicionarObjeto(inputCodigo.value ,inputProduto.value,inputQuant.value)

        // limpa os campos de input
        limparInput(inputCodigo ,inputProduto,inputQuant)
        inputCodigo.focus()
    }
}

// limpa a Tabela
function limparTabela(){
    const produtosContainer = document.getElementById('produtos-container')
    produtosContainer.innerText = ''

    // escreve o cabeçalho da tabela
    escreverTabela('Código','Produto','Quantidade', produtosContainer)
    // limpa o objeto
    limparObjeto()

    
    inputCodigo.focus()
}

// Escreve os dados na tabela
function escreverTabela(codigo, produto, quantidade, container){
    // cria os elementos
    let textProduto = document.createElement('th')
    let textCodigo = document.createElement('th')
    let textQuant = document.createElement('th')
    let tr = document.createElement('tr')

    // define os valores
    textProduto.textContent = produto
    textCodigo.textContent = codigo
    textQuant.textContent = quantidade

    // estiliza a tabela
    tr.className = 'flex '
    textCodigo.className = 'w-[33%] border-2'
    textProduto.className = 'w-[33%] border-y-2'
    textQuant.className = 'w-[33%] border-2'

    // adciona na tabela
    tr.appendChild(textCodigo)
    tr.appendChild(textProduto)
    tr.appendChild(textQuant)
    container.appendChild(tr)
}

// adciona os dados no  objeto
function adicionarObjeto(cod, prdto, quant){
    produto.codigo.push(cod)
    produto.nome.push(prdto)
    produto.quantidade.push(quant)
}

// limpa os campos de input
function limparInput(cod, prdto, quant){
    cod.value = ''
    prdto.value = ''
    quant.value = ''
}

// limpa o objeto produto
function limparObjeto(){
    produto.codigo = ''
    produto.nome = ''
    produto.quantidade = ''
}