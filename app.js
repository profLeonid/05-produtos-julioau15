'use strict'

function adicionarProduto(){
    const inputProduto = document.getElementById('input-produto')
    const inputCodigo = document.getElementById('input-codigo')
    const inputQuant = document.getElementById('input-quant')
    const produtosContainer = document.getElementById('produtos-container')

    if(inputProduto.value == '' || inputCodigo.value == '' || inputQuant.value == ''){
        alert('erro');
        inputCodigo.focus()
    }else{
        escreverTabela(inputCodigo.value ,inputProduto.value,inputQuant.value, produtosContainer)

        produtosContainer.appendChild(tr)
        inputProduto.value = ''
        inputCodigo.value = ''
        inputQuant.value = ''
        inputCodigo.focus()
    }
}

function limparLista(){
    const produtosContainer = document.getElementById('produtos-container')
    produtosContainer.innerText = ''

    escreverTabela('codigo','produto','quantidade', produtosContainer)
    
    inputCodigo.focus()
}

function escreverTabela(codigo, produto, quantidade, container){
    let textProduto = document.createElement('th')
    let textCodigo = document.createElement('th')
    let textQuant = document.createElement('th')

    textProduto.textContent = produto
    textCodigo.textContent = codigo
    textQuant.textContent = quantidade

    let tr = document.createElement('tr')
    tr.className = 'flex justify-between border-be-2 p-1'
    tr.appendChild(textCodigo)
    tr.appendChild(textProduto)
    tr.appendChild(textQuant)
    container.appendChild(tr)
}