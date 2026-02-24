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
        let textProduto = document.createElement('th')
        let textCodigo = document.createElement('th')
        let textQuant = document.createElement('th')
        textProduto.textContent = inputProduto.value
        textCodigo.textContent = inputCodigo.value
        textQuant.textContent = inputQuant.value
        
        let tr = document.createElement('tr')
        tr.className = 'flex justify-around border-be-2 p-1'
        tr.appendChild(textCodigo)
        tr.appendChild(textProduto)
        tr.appendChild(textQuant)

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
    let textProduto = document.createElement('th')
    let textCodigo = document.createElement('th')
    let textQuant = document.createElement('th')
    textProduto.textContent = 'Produto'
    textCodigo.textContent = 'Código'
    textQuant.textContent = 'Quantidade'
    let tr = document.createElement('tr')
    tr.className = 'flex justify-around border-be-2 p-1'
    tr.appendChild(textCodigo)
    tr.appendChild(textProduto)
    tr.appendChild(textQuant)
    produtosContainer.appendChild(tr)


    
    inputCodigo.focus()
}